export interface SkillInterface {
  name: string;
  skillGroupKey: number;
}

export interface TechnologiesInterface {
  header: string;
  skills: SkillInterface[];
  skillgroups: skillGroupInterface[];
  articles: TechnologiesArticleInterface[];
}

export interface TechnologiesArticleInterface {
title: string;
body: string;
}

export interface skillGroupInterface {
  keyProp: number;
  groupName: string;
}

export interface fuseSkillInterface {
  item:SkillInterface;
  refIndex: number;
  score: number;
}

export interface SKillGroupsWithSkillsInterface {
  name: string;
  keyProp: number;
  ownedSkills: SkillInterface[];
}