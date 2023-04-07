ItemSkillEvents.register((event) => {
  console.info("Registering item restrictions");

  // Test holdable restriction (should not be able to keep item in any inventory slot [main inventory, armor, offhand])
  event.restrict(ITEMS.BED, (restrict) => {
    restrict.everything().if(hasntKillCount(10));
  });

  // Test restrict by mod id
  event.restrict("@naturescompass", (restrict) => {
    restrict.unusable().if(hasntKillCount(10));
  });

  event.restrict("create:*", (restrict) => {
    restrict.unproducible().if(hasntKillCount(4));
  });

  // Test restrict by tag
  event.restrict("#wool", (restrict) => {
    restrict.unconsumable().if(hasntKillCount(10));
  });

  // Test producible restriction (should not be able to craft paper)
  event.restrict(ITEMS.PAPER, (restrict) => {
    restrict.unproducible().if(hasntKillCount(4));
  });

  // Test unholdable restriction (should not be able to craft things that use sugar like cake, craft sugar, use as a
  // weapon, use as a tool, wear, or hold)
  event.restrict(ITEMS.SUGAR, (restrict) => {
    restrict.unholdable().if(hasntKillCount(6));
  });

  // Test replacement item (gold swords should look like netherite swords in inventory, in hand, and suffer the same
  // restrictions
  // event.restrict(ITEMS.GOLD_SWORD, (restrict) => {
  //   restrict.replaceWithItem(ITEMS.SWORD).if(hasntKillCount(5));
  // });

  // Test harmful restriction (attacking with sword does not produce more damage than punching)
  event.restrict(ITEMS.SWORD, (restrict) => {
    restrict.harmless().if(hasntKillCount(10));
  });

  // Test usable restriction (should not be able to create grass paths)
  event.restrict(ITEMS.SHOVEL, (restrict) => {
    restrict.unusable().unless(hasKillCount(10));
  });

  // Test usable restriction (should not be able to shear sheep)
  // Also test identifiable restriction (should not see inventory tooltip)
  // FAIL on unidentifiable on FORGE singleplayer
  event.restrict(ITEMS.SHEARS, (restrict) => {
    restrict.unusable().unidentifiable().unless(hasKillCount(8));
  });

  // Test usable restriction (should not be able to eat)
  event.restrict(ITEMS.APPLE, (restrict) => {
    restrict.unusable().unless(hasKillCount(10));
  });

  // Test wearable restriction (should not be able to equip)
  event.restrict(ITEMS.ELYTRA, (restrict) => {
    restrict.unwearable().unless(hasKillCount(10));
  });
});
