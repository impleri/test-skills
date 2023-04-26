SkillEvents.modification((event) => {
  // Test modifying basic skill
  event.modify(SKILLS.TEST, (skill) => {
    skill.initialValue(true).description("Less of a test value");
  });
});

// Test improve, if, and cannot
onRightClick(BLOCKS.GRASS, (event) =>
  event.improve(SKILLS.STARTED_QUEST, (conditions) =>
    conditions.if(event.cannot(SKILLS.DENIED_QUEST))
  )
);

// Test degrade
onRightClick(BLOCKS.DIRT, (event) => event.degrade(SKILLS.STARTED_QUEST));

// Test improve, unless, and can
onRightClick(BLOCKS.LEAVES, (event) =>
  event.improve(SKILLS.DENIED_QUEST, (conditions) =>
    conditions.unless(event.can(SKILLS.DENIED_QUEST)).chance(50)
  )
);

// Test degrade
onRightClick(BLOCKS.LOG, (event) => event.degrade(SKILLS.DENIED_QUEST));
