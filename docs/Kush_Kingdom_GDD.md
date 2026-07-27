# Kush Kingdom: Grow Empire
### Game Design Document (v2 — Backpack Run)

## 1. Concept

A player-controlled "carry loop" game in the visual style of Whiteout Survival's base-building ads, reskinned around a cartoony, goofy weed-growing empire. No PvP, no combat — you directly steer a character around a small farm: grab seeds, plant them, collect the grown weed into a visible stacking backpack, then walk it over to the counter to sell. Cash goes back into upgrades and unlocking more of the farm.

**Tagline:** *"From bag seed to Kush Kingpin."*

## 2. Core Loop

1. **Walk** your character (joystick / drag on mobile, WASD/arrows on desktop) to the **Seed Pile** and grab seeds — they stack visibly on your back as you collect ("tower backpack").
2. **Walk** to an open grow plot and step onto it to **plant** a seed from your stack.
3. **Wait** for the plot to grow through stages (Seed → Sprout → Flower → Ready) — happens in real time whether you're standing there or off doing something else.
4. **Walk** back to a ready plot to **harvest** — the bud gets added to your carried stack.
5. **Walk** the full stack over to the **Sell Counter** to cash it in.
6. **Reinvest** Cash into backpack capacity, walk speed, faster grow times, better sell prices, and unlocking more plots.
7. Plot growth continues on real timestamps, so time away isn't wasted — plots you left growing are ready when you get back to them.

## 3. Currencies

| Currency | Name | Earned From | Spent On |
|---|---|---|---|
| Soft | **Cash ($)** | Selling product at Dispensary | Plots, buildings, upgrades, seeds |
| Premium | **Kief** | Daily login, level-ups, ads, IAP | Instant-grow, rare strains, cosmetic skins |
| Resource | **Raw Bud / Cured Bud** | Harvesting / Processing | Feeds directly into selling & recipes |

## 4. Buildings

- **Grow Plots** — base planting tiles; expand the grid as the farm levels up.
- **Greenhouse** — upgrade tier for plots; increases yield and grow speed.
- **Curing Shed (Dryer)** — converts Raw Bud into higher-value Cured Bud over time.
- **Processing Lab** — turns Cured Bud into premium goods (pre-rolls, edibles, extracts) worth more per unit.
- **Dispensary** — sell window; higher levels unlock better prices and bigger customer queues.
- **Munchies Shack** — passive idle-income building (snack sales), ticks even while offline.
- **Storage Silo** — raises max inventory so production doesn't cap out.

## 5. Progression

- **Strain tiers** (unlock in order, each with longer grow time / bigger payout): Bag Seed → Dirt Weed → Blue Dream → Sour Diesel → OG Kush → Purple Haze → Golden Kush → Legendary "Kingpin Kush."
- **Farm ranks / zones**: Backyard Grow → Garage Op → Barn → Warehouse → Mega Farm → Kush Kingdom (each unlock = bigger grid + new building types).
- **XP & Levels**: harvesting, selling, and completing "orders" (daily quests, e.g. "Sell 50 Cured Buds") grant XP; leveling up grants Kief and unlocks the next zone/strain.

## 6. Characters (mascot cast, cartoony/goofy tone)

- **Sprout** — walking cannabis-leaf mascot, the tutorial guide.
- **Grandpa Green** — old-timer mentor, dishes out grow tips and dad jokes.
- **Nugget** — the farm dog who occasionally digs up bonus Kief.
- **Customers** — rotating goofy NPCs at the Dispensary window (the Muncher, the Chill Guy, the Tourist) who occasionally offer bulk-buy bonus orders.

## 7. Art Direction

Bright, bold-outline cartoon style — same top-down/isometric "cozy base" camera angle as Whiteout Survival's ads, swapped from snowy fortress to a sunny, leafy farm-to-kingdom progression. Big expressive plant-growth animations (seed wiggle → sprout pop → glowing ready-to-harvest bud) sell the satisfying "number go up" idle feel.

## 8. Monetization (notes, not implemented in prototype)

- Kief purchases for instant-grow / instant-cure.
- Cosmetic farm skins and mascot outfits.
- VIP pass: passive Kief trickle + reduced building costs.
- Rewarded-ad bonuses: 2x harvest, free instant-grow token, bonus Kief.
- Starter bundle: cash + Kief + rare seed, one-time discounted offer.

## 9. Prototype Scope

Two prototypes are included:

- **`kush_kingdom_backpack_run.html`** (current/primary) — the walking carry-loop described above: joystick/WASD movement, a stacking backpack visual, 12 unlockable grow plots, a seed pile and sell counter you physically walk to, and an upgrade shop (backpack capacity, move speed, grow speed, sell price, plot unlocks). This is the version matching the "grab seeds → plant → collect → walk to counter to sell" mechanic.
- **`kush_kingdom_prototype.html`** (earlier draft) — a tap-based idle/tycoon version with no avatar movement. Kept for reference in case the idle-only direction is wanted later, but it does not reflect the current chosen mechanic.

Both are single self-contained HTML files — open either directly in a browser.
