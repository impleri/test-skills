// priority: 0

// Maybe fail?
onRightClick(BLOCKS.SAND, event => event.set(SKILLS.MAGIC_SPECIAL, global['MAGIC_TYPES'].blue));

onRightClick(BLOCKS.BIRCH_LEAVES, event => event.set(SKILLS.MAGIC_SPECIAL, global['MAGIC_TYPES'].green, conditions => conditions.unless(event.can(SKILLS.MAGIC_SPECIAL, global['MAGIC_TYPES'].red))));
