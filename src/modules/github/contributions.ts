import { splitEvery } from 'ramda';

export async function getContributions(
  token: string,
  username: string,
  from: string = new Date('2012-01-01').toISOString(),
  to: string = new Date('2013-01-01').toISOString()
): Promise<ContributionsData> {
  const headers = {
    Authorization: `bearer ${token}`,
  };
  const body = {
    query: `query {
              user(login: "${username}") {
                name
                contributionsCollection(
                  from: "${from}"
                  to: "${to}"
                ) {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        contributionCount
                        date
                        weekday
                        contributionLevel
                      }
                      firstDay
                    }
                  }
                }
              }
            }`,
  };
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  });

  const data = await response.json();
  return data as ContributionsData;
}

const getPixelRatio = () => {
  if (typeof window === 'undefined') {
    return 1;
  }
  return window.devicePixelRatio || 1;
};

const getColor = (level: ContributionLevel, theme: 'dark' | 'light') => {
  // console.log('level', level);
  switch (level) {
    case 'FIRST_QUARTILE':
    case 'NONE':
      return theme === 'dark' ? '#1c1917' : '#0284c7';
    case 'SECOND_QUARTILE':
      return theme === 'dark' ? '#c2410c' : '#38bdf8';
    case 'THIRD_QUARTILE':
      return theme === 'dark' ? '#f97316' : '#0284c7';
    case 'FOURTH_QUARTILE':
      return theme === 'dark' ? '#fdba74' : '#0284c7';
    default:
      return 'transparent';
  }
};

export function drawContributions(
  canvas: HTMLCanvasElement,
  data: DayContribution[],
  theme: 'dark' | 'light' = 'dark'
) {
  const offsetX = 0;
  const offsetY = 0;
  const boxWidth = 15;
  const boxMargin = 2;
  const boxHeight = 1020;
  const canvasMargin = 0;
  const weekHeight = (boxWidth + boxMargin) * 8 + canvasMargin;
  const scaleFactor = getPixelRatio();
  const height = 53 * weekHeight + canvasMargin + 10;
  const width = 53 * (boxWidth + boxMargin) + canvasMargin * 2;

  // eslint-disable-next-line no-param-reassign
  canvas.width = width * scaleFactor;
  // eslint-disable-next-line no-param-reassign
  canvas.height = height * scaleFactor;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Could not get 2d context from Canvas');
  }

  const weeks = splitEvery(7, data);

  ctx.scale(scaleFactor, scaleFactor);

  weeks.forEach((days, x) => {
    days.forEach((day, y) => {
      ctx.fillStyle = getColor(day.contributionLevel, theme);
      ctx.fillRect(
        offsetX + (boxWidth + boxMargin) * x,
        offsetY + (boxHeight + boxMargin) * y,
        10,
        boxHeight
      );
    });
  });
}
