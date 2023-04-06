FluidSkillEvents.register((event) => {
  // Tests fluid replacements (all water in desert areas should be lava)
  event.restrict(FLUIDS.WATER, (is) => {
    is.replaceWithFluid(FLUIDS.LAVA)
      .inDimension("overworld")
      .inBiome("#minecraft:is_badlands")
      .inBiome("desert")
      .unless(hasKillCount(5));
  });

  // Test fluid can be replaced with air
  event.restrict(FLUIDS.WATER, (is) => {
    is.replaceWithAir().inBiome("#minecraft:is_mountain").if(hasntKillCount(5));
  });

  // Test bucketable
  event.restrict(FLUIDS.LAVA, (is) => {
    is.unbucketable().inBiome("#minecraft:is_mountain").if(hasntKillCount(5));
  });

  // Test bucketable in a biome
  event.restrict(FLUIDS.WATER, (is) => {
    is.unbucketable().inBiome("plains").if(hasntKillCount(5));
  });

  event.restrict(FLUIDS.WATER, (is) => {
    is.unconsumable().if(hasntKillCount(5));
  });

  event.restrict(FLUIDS.LAVA, (is) => {
    is.unproducible().if(hasntKillCount(5));
  });

  // Tests fluid mode changing (all water not in an ocean or river biome is finite)
  event.restrict(FLUIDS.WATER, (is) => {
    is.finite().notInBiome("#is_ocean").notInBiome("river");
  });

  // Tests fluid mode changing (all lava in the Nether is infinite)
  event.restrict(FLUIDS.LAVA, (is) => {
    is.infinite().inDimension("the_nether");
  });

  // Producible - integrate with item skills

  // Consumable - integrate with item skills

  // Identifiable - should add via block skills
});
