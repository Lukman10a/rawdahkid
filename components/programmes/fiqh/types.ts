type SingleSectionLevelCardProps = {
  levelNumber: string;
  title: string;
  focus: string;
  aim: string;
  topics: string[];
};

type DualSectionLevelCardProps = {
  levelNumber: string;
  title: string;
  focus: string;
  aim: string;
  sectionTitle1?: string;
  sectionTitle2?: string;
  section1: string[];
  section2: string[];
};

export type LevelConfig =
  | ({
      type: "single";
      titleKey: string;
    } & Omit<SingleSectionLevelCardProps, "title">)
  | ({
      type: "dual";
      titleKey: string;
    } & Omit<DualSectionLevelCardProps, "title">);
