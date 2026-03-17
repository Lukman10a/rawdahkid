export type BaseLevelTemplate = {
  levelNumber: string;
  titleKey: string;
  duration: string;
  classDuration: string;
  aim: string;
};

export type SingleLevelTemplate = BaseLevelTemplate & {
  kind: "single";
  topics: string[];
};

export type DualLevelTemplate = BaseLevelTemplate & {
  kind: "dual";
  sectionTitle1: string;
  sectionTitle2: string;
  section1: string[];
  section2: string[];
};

export type LevelTemplate = SingleLevelTemplate | DualLevelTemplate;
