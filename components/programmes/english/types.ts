export type Unit = {
  no: number;
  topic: string;
  skills: string;
};

export type LevelCardProps = {
  levelNumber: string;
  title: string;
  subtitle: string;
  ageGroup: string;
  duration: string;
  aim: string;
  units: Unit[];
};

export type LevelConfig = Omit<LevelCardProps, "title"> & {
  titleKey: string;
};
