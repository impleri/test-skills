// Log all check spawn events (default KubeJS handling)
// EntityEvents.checkSpawn(event => {
//   console.info(`Maybe spawning ${event.entity.name}`);
// });

// Always prevent blazes from spawning (default KubeJS handling)
EntityEvents.checkSpawn('minecraft:blaze', event => event.cancel());

// Block creepers from spawning if a player in spawn range has started the quest
EntityEvents.checkSpawn('minecraft:creeper', event => {
  console.info(`Entity ${event.entity.name} trying to spawn in ${event.block.dimension} at ${event.block.pos.toShortString()}`);
  MobSkills.allowUnlessAny(event, playerCondition => playerCondition.can('skills:started_quest'));
});

// Block zombies from spawning unless all players in spawn range have started the quest
EntityEvents.checkSpawn('minecraft:zombie', event => {
  console.info(`Entity ${event.entity.name} trying to spawn in ${event.block.dimension} at ${event.block.pos.toShortString()}`);
  MobSkills.denyUnlessAll(event, playerCondition => playerCondition.can('skills:started_quest'));
});
