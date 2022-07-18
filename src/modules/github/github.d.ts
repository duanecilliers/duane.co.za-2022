type ContributionLevel =
  | 'NONE'
  | 'FIRST_QUARTILE'
  | 'SECOND_QUARTILE'
  | 'THIRD_QUARTILE'
  | 'FOURTH_QUARTILE';

type DayContribution = {
  contributionLevel: ContributionLevel;
  contributionCount: number;
  date: Date;
  weekday: number;
};

type WeekContribution = Array<{
  contributionDays: DayContribution[];
}>;

type ContributionsCollection = {
  contributionCalendar: {
    totalContributions: number;
    weeks: WeekContribution;
  };
};

type ContributionsData = {
  data: {
    user: {
      name: string;
      contributionsCollection: ContributionsCollection;
    };
  };
};

type ContributionsByYear = Array<{
  year: number;
  contributions: ContributionsData;
}>;
