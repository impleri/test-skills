// Test catching all teleport events, plus event.entity
onEvent("dimensionSkills.register", (event) => {
  // Test simple teleport restriction
  event.restrict("minecraft:the_nether", (restrict) =>
    restrict.inaccessible().if(hasntKillCount(8))
  );

  // Test replacement dimension
  event.restrict("the_nether", (restrict) =>
    restrict.replaceWith("the_end").if(hasntKillCount(5))
  );

  // Test one-way teleport restriction
  event.restrict("minecraft:overworld", (restrict) =>
    restrict.inaccessible().inDimension("the_nether").unless(hasKillCount(10))
  );
});
