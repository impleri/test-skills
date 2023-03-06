onRightClick(BLOCKS.SAND, (event) =>
  event.degrade(SKILLS.MINING_LEVEL, (conditions) =>
    conditions.min(global["MINE_LEVELS"].iron).max(global["MINE_LEVELS"].gold)
  )
);

onRightClick(BLOCKS.BIRCH_LEAVES, (event) =>
  event.improve(SKILLS.MINING_LEVEL, (conditions) =>
    conditions
      .min(global["MINE_LEVELS"].diamond)
      .max(global["MINE_LEVELS"].diamond)
  )
);
