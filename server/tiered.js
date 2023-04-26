const MINE_LEVELS = global["MINE_LEVELS"];

onRightClick(BLOCKS.SAND, (event) =>
  event.degrade(SKILLS.MINING_LEVEL, (conditions) =>
    conditions.min(MINE_LEVELS.iron).max(MINE_LEVELS.gold)
  )
);

onRightClick(BLOCKS.BIRCH_LEAVES, (event) =>
  event.improve(SKILLS.MINING_LEVEL, (conditions) =>
    conditions.min(MINE_LEVELS.diamond).max(MINE_LEVELS.netherite)
  )
);
