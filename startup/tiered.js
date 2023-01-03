// priority: 0

global['MINE_LEVELS'] = {
  stone: "stone",
  iron: "iron",
  gold: "gold",
  diamond: "diamond",
  netherite: "netherite",
};

const MINE_TIERS = Object.values(global['MINE_LEVELS']);

SkillEvents.registration(event => {
  // Test adding numeric skill
  event.add(SKILLS.MINING_LEVEL, 'tiered', skill => {
    skill.initialValue(global['MINE_LEVELS'].iron)
        .options(MINE_TIERS)
        .description('Mining level of bare fists');
   });
 });
