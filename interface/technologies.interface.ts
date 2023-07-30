export interface SkillInterface {
  name: string;
  skillGroupKey: number;
}

export interface TechnologiesInterface {
  header: string;
  skills: SkillInterface[];
  skillgroups: skillGroupInterface[];
}

export interface skillGroupInterface {
  key: number;
  groupName: string;
}

export interface fuseSkillInterface {
  item:SkillInterface;
  refIndex: number;
  score: number;
}