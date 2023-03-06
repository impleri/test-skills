// Test catching all teleport events, plus event.entity
DimensionEvents.onTeleport((event) => {
  console.info(
    `Player ${event.entity.name} trying to teleport to ${event.destination}`
  );
  logSkills(skillsFor(event.entity).all, "[DIMENSION]");
});

// Test general blocking (should not be able to teleport at all)
DimensionEvents.onTeleport("minecraft:the_nether", (event) => event.cancel());

// Test skills-based blocking plus event.player and event.deny (should not be able to teleport)
DimensionEvents.onTeleport("minecraft:the_end", (event) => {
  if (skillsFor(event.player).cannot(STARTED_QUEST)) {
    event.deny();
  }
});
