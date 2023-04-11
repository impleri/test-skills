// priority: 90

const SKILLS = global["SKILLS"];
const MOBS = global["MOBS"];
const FLUIDS = global["FLUIDS"];
const BLOCKS = global["BLOCKS"];
const ITEMS = global["ITEMS"];

// Helper functions

const logSkills = (skills, prefix) =>
  skills &&
  console.info(
    `${prefix} Player has ${skills
      .map((skill) => `${skill.name} at ${skill.value}`)
      .join(", ")}`
  );

const dumpTypes = () =>
  PlayerSkills.skillTypes.forEach((type) =>
    console.info(`Found skill type ${type.name}`)
  );

const dumpSkills = (description) =>
  logSkills(PlayerSkills.skills, description ?? "Found Skills");

const skillsFor = (entity) => entity.data.skills;

const wrapSkillsHandler = (handler) => (event) => {
  if (event.hand !== "main_hand") {
    return;
  }

  logSkills(skillsFor(event.entity).all, "[BEFORE]");

  handler(skillsFor(event.entity));

  logSkills(skillsFor(event.entity).all, "[AFTER]");
};

const onLeftClick = (block, handler) =>
  onEvent("block.left_click", (event) => {
    if (event.block.id === block) {
      wrapSkillsHandler(handler)(event);
    }
  });

const onRightClick = (block, handler) =>
  onEvent("block.right_click", (event) => {
    if (event.block.id === block) {
      wrapSkillsHandler(handler)(event);
    }
  });

const hasKillCount = (count) => (player) =>
  player.can(SKILLS.KILL_COUNT, count);

const hasntKillCount = (count) => (player) =>
  player.cannot(SKILLS.KILL_COUNT, count);
