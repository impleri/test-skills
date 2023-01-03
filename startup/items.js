ItemSkillEvents.register(event => {
  const hasKillCount = count => player => player.can(SKILLS.KILL_COUNT, count);
  const hasntKillCount = count => player => player.cannot(SKILLS.KILL_COUNT, count);

  // Test craftability
  event.restrict(ITEMS.PAPER, restrict => {
    restrict.nothing()
      .unproducible()
      .if(hasntKillCount(4));
  });


  // Test visibility
  event.restrict(ITEMS.SUGAR, restrict => {
    restrict.nothing()
      .unproducible()
      .unconsumable()
      .if(hasntKillCount(6));
  });

// Test holdability
  event.restrict(ITEMS.BED, restrict => {
    restrict.everything()
      .if(hasntKillCount(10));
  });

// Test harmfulness
  event.restrict(ITEMS.SWORD, restrict => {
    restrict.nothing()
      .harmless()
      .if(hasntKillCount(10));
  });

// Test usability on blocks
  event.restrict(ITEMS.SHOVEL, restrict => {
    restrict.nothing()
      .unusable()
      .unless(hasKillCount(10));
  });

// Test usability on entities
  event.restrict(ITEMS.SHEARS, restrict => {
    restrict.nothing()
      .unusable()
      .unidentifiable()
      .unless(hasKillCount(10));
  });

// Test usability in air
  event.restrict(ITEMS.APPLE, restrict => {
    restrict.nothing()
      .unusable()
      .unless(hasKillCount(10));
  });

// Test wearability
  event.restrict(ITEMS.ELYTRA, restrict => {
    restrict.nothing()
      .unwearable()
      .unless(hasKillCount(10));
  });
});
