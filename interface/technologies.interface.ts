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