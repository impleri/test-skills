// priority: 10

// Test onChange event handling
onEvent("skills.changed", (event) => {
  if (event.isUnchanged) {
    console.warn(`Changed ${event.skill.name} to ${event.skill.value}.`);
  } else {
    console.info(
      `Changed ${event.skill.name} to ${event.skill.value}. Improved? ${event.isImproved}. Degraded? ${event.isDegraded}.`
    );
  }
});
