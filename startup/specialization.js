// priority: 0

global["MAGIC_TYPES"] = {
  green: "green",
  blue: "blue",
  white: "white",
  black: "black",
  red: "red",
};

const MAGIC_SPECIALIZATIONS = Object.values(global["MAGIC_TYPES"]);

onEvent("skills.registration", (event) => {
  // Test adding specialized skill, change limits
  event.add(SKILLS.MAGIC_SPECIAL, "specialized", (skill) => {
    skill
      .options(MAGIC_SPECIALIZATIONS)
      .description("Magic Specialization")
      .limitChanges(3);
  });
});
