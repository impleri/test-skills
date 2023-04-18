SkillEvents.registration((event) => {
  // Test most basic add
  event.add(SKILLS.TEST, "skills:basic");

  // Test adding basic skill, description, ResourceLocation parsing
  event.add(SKILLS.STARTED_QUEST, "basic", (skill) => {
    skill
      .description("Indicates a Player has joined the Great Quest")
      .sharedWithTeam();
  });

  // Test adding basic skill, initial value
  event.add(SKILLS.DENIED_QUEST, "skills:basic", (skill) => {
    skill.initialValue(false);
  });
});
