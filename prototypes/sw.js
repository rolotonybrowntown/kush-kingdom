/* Kush Kingdom offline shell.
 *
 * The game is one self-contained HTML file with Three.js inlined and no
 * runtime fetches, so "playable offline" needs exactly one thing: the page
 * itself has to load without a network. That is all this worker does.
 *
 * Saves are not involved. They live in localStorage, which is already local
 * and already survives being offline — there is no server to sync them to.
 *
 * Update policy is deliberately conservative. A new build is fetched in the
 * background and parked as the *waiting* worker; it never takes over a live
 * tab on its own. The page notices the wait and offers a reload. Auto-
 * activating would mean a running game could be swapped mid-session, and
 * silently serving a stale cache is exactly the "I pushed but nothing
 * changed" trap this project has been bitten by before.
 */
var CACHE = "kush-kingdom-v1";
var PRECACHE = ["./", "./kush_kingdom_3d.html"];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // reload bypasses the HTTP cache, so a fresh install never bakes in a
      // stale copy the browser happened to be holding
      return Promise.all(PRECACHE.map(function (u) {
        return c.add(new Request(u, { cache: "reload" })).catch(function () {});
      }));
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Sent by the page when the player accepts an update.
self.addEventListener("message", function (e) {
  if (e.data && e.data.type === "skipWaiting") self.skipWaiting();
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Network-first for the page itself: online, you always get the build that
  // is actually deployed. The cache is the fallback, not the default, so a
  // reload after a push shows the push.
  if (req.mode === "navigate" || (req.destination === "document")) {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || caches.match("./kush_kingdom_3d.html");
        });
      })
    );
    return;
  }

  // Everything else (there is very little) can come from cache first.
  e.respondWith(
    caches.match(req).then(function (hit) {
      return hit || fetch(req).then(function (res) {
        if (res && res.status === 200 && res.type === "basic") {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
