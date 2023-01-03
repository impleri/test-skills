// priority: 0

SkillEvents.registration(event => {
  // Test adding numeric skill
  event.add(SKILLS.KILL_COUNT, 'numeric', skill => {
    skill.initialValue(0)
        .description('Count of player kills');
   });
 });
