// priority: 0

onRightClick(BLOCKS.STONE, event => event.improve(SKILLS.KILL_COUNT, conditions => conditions.min(8).max(10)));

onRightClick(BLOCKS.BIRCH, event => event.degrade(SKILLS.KILL_COUNT, conditions => conditions.min(3).max(5)));
