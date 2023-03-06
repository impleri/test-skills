MobSkillEvents.register((event) => {
  console.info("Registering mob restrictions");

  // Always prevent spiders from spawning
  event.restrict(MOBS.SPIDER, (is) => is.unspawnable().always());

  event.restrict('#skeletons', is => is.unspawnable().always());

  // ALLOW creepers to spawn IF ALL players in range
  event.restrict(MOBS.CREEPER, (is) => is.spawnable(true).if(hasKillCount(6)));

  // ALLOW cows to spawn UNLESS ANY players in range
  event.restrict(MOBS.COW, (is) => is.spawnable().unless(hasntKillCount(6)));

  // DENY zombies from spawning UNLESS ALL players in range
  event.restrict(MOBS.ZOMBIE, (is) =>
    is.unspawnable(true).unless(hasKillCount(4))
  );

  // DENY zombies from spawning IF ANY player in range
  event.restrict(MOBS.SHEEP, (is) => is.unspawnable().if(hasntKillCount(4)));

  // Players cannot interact with villagers
  event.restrict(MOBS.VILLAGER, (is) => is.usable().if(hasKillCount(9)));

  // Players cannot shear sheep (even if tools aren't blocked)
  event.restrict(MOBS.SHEEP, (is) => is.unusable().if(hasntKillCount(10)));
});
