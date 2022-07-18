import colors from 'tailwindcss/colors';

export async function getContributions(
  token: string,
  username: string
): Promise<ContributionsData> {
  const headers = {
    Authorization: `bearer ${token}`,
  };
  const body = {
    query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
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
  switch (level) {
    case 'FIRST_QUARTILE':
      return theme === 'dark' ? colors.stone[900] : colors.sky[200];
    case 'SECOND_QUARTILE':
      return theme === 'dark' ? colors.amber[800] : colors.sky[400];
    case 'THIRD_QUARTILE':
      return theme === 'dark' ? colors.amber[700] : colors.sky[600];
    case 'FOURTH_QUARTILE':
      return theme === 'dark' ? colors.amber[600] : colors.sky[600];
    case 'NONE':
    default:
      return 'transparent';
  }
};

export function drawContributions(
  canvas: HTMLCanvasElement,
  data: ContributionsCollection,
  theme: 'dark' | 'light' = 'dark'
) {
  const offsetX = 0;
  const offsetY = 0;
  const boxWidth = 15;
  const boxMargin = 2;
  const boxHeight = 1030;
  const canvasMargin = 0;
  const weekHeight = (boxWidth + boxMargin) * 8 + canvasMargin;
  const scaleFactor = getPixelRatio();
  const height =
    data.contributionCalendar.weeks.length * weekHeight + canvasMargin + 10;
  const width = 53 * (boxWidth + boxMargin) + canvasMargin * 2;

  // eslint-disable-next-line no-param-reassign
  canvas.width = width * scaleFactor;
  // eslint-disable-next-line no-param-reassign
  canvas.height = height * scaleFactor;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Could not get 2d context from Canvas');
  }

  ctx.scale(scaleFactor, scaleFactor);

  data.contributionCalendar.weeks.forEach((week, x) => {
    week.contributionDays.forEach((day, y) => {
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
