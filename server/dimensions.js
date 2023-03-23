// Test catching all teleport events, plus event.entity
onEvent("dimensionEvents.register", (event) => {
  event.restrict("the_end", (r) =>
    r.inaccessible().if((player) => player.cannot(STARTED_QUEST))
  );

  event.restrict("minecraft:the_nether", (r) =>
    r.replaceWith("the_end").if(hasntKillCount(5))
  );

  event.restrict("the_nether", (r) => r.inaccessible().unless(hasKillCount(8)));
});
