export type DayEntry = {
  day: string;
  type: string;
  content: string;
};

export type WeekEntry = {
  title: string;
  days: DayEntry[];
};

export type WeekTemplate = {
  titleKey: string;
  days: DayEntry[];
};

export type WeeklyLevelTemplate = {
  levelNumber: string;
  titleKey: string;
  arabicTitle: string;
  author: string;
  duration: string;
  schedule: string;
  objective: string;
  overview: string;
  weeks: WeekTemplate[];
};
