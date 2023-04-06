BlockSkillEvents.register((event) => {
  // Tests block replacements (all oak leaves should be birch leaves)
  event.restrict(BLOCKS.LEAVES, (is) => {
    is.replaceWithBlock(BLOCKS.BIRCH_LEAVES).unless(hasKillCount(9));
  });

  // Test targeting mod id
  event.restrict("@rechiseled", (is) => {
    is.unbreakable();
  });

  // Test targeting tags
  event.restrict("#logs", (is) => {
    is.unbreakable();
  });
  
  // Test chained block replacements (all birch AND oak leaves should be stone)
  event.restrict(BLOCKS.BIRCH_LEAVES, (is) => {
    is.replaceWithBlock(BLOCKS.STONE).unless(hasKillCount(6));
  });

  // Tests chained restrictions (oak/birch leaves should be unbreakable)
  event.restrict(BLOCKS.STONE, (is) => {
    is.unbreakable().unless(hasKillCount(4));
  });

  // Tests breakable restrictions (birch logs should be unbreakable)
  event.restrict(BLOCKS.BIRCH, (is) => {
    is.unbreakable().unless(hasKillCount(6));
  });

  // Tests harvestable restrictions (breaking grass even with a shovel should drop nothing)
  event.restrict(BLOCKS.GRASS, (is) => {
    is.unharvestable().unless(hasKillCount(6));
  });

  // Tests usable restrictions (right clicking on furnace should do nothing)
  event.restrict(BLOCKS.FURNACE, (is) => {
    is.unusable().if(hasntKillCount(6));
  });
});

// Triggering a block update on a replaced block unhides it
// Travelling through dimension unhides replaced blocks
// Changing skills is not triggering block updates
