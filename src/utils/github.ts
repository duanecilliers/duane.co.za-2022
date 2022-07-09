import colors from 'tailwindcss/colors'

function getPixelRatio() {
  if (typeof window === 'undefined') {
    return 1
  }
  return window.devicePixelRatio || 1
}

const boxWidth = 15
const boxMargin = 2
const boxHeight = 800
const canvasMargin = 0
const weekHeight = (boxWidth + boxMargin) * 8 + canvasMargin
const scaleFactor = getPixelRatio()

type ContributionLevel = 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE'

type DayContribution = {
  contributionLevel: ContributionLevel
  contributionCount: number
  date: Date
  weekday: number
}

type WeekContribution = Array<{
  contributionDays: DayContribution[]
}>

export type ContributionsCollection = {
  contributionCalendar: {
    totalContributions: number
    weeks: WeekContribution
  }
}

export type ContributionsData = {
  data: {
    user: {
      name: string
      contributionsCollection: ContributionsCollection
    }
  }
}

const getColor = (level: ContributionLevel, theme: 'dark' | 'light') => {
  switch (level) {
    case 'FIRST_QUARTILE':
      return theme === 'dark' ? colors.amber[900] : colors.sky[200]
    case 'SECOND_QUARTILE':
      return theme === 'dark' ? colors.amber[800] : colors.sky[400]
    case 'THIRD_QUARTILE':
      return theme === 'dark' ? colors.amber[600] : colors.sky[600]
    case 'FOURTH_QUARTILE':
      return theme === 'dark' ? colors.amber[500] : colors.sky[600]
    case 'NONE':
    default:
      return 'transparent'
  }
}

export function drawContributions(
  canvas: HTMLCanvasElement,
  data: ContributionsCollection,
  theme: 'dark' | 'light' = 'dark',
) {
  const offsetX = 0
  const offsetY = 0
  const height = data.contributionCalendar.weeks.length * weekHeight + canvasMargin + 10
  const width = 53 * (boxWidth + boxMargin) + canvasMargin * 2

  canvas.width = width * scaleFactor
  canvas.height = height * scaleFactor
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('Could not get 2d context from Canvas')
  }

  ctx.scale(scaleFactor, scaleFactor)

  data.contributionCalendar.weeks.forEach((week, x) => {
    week.contributionDays.forEach((day, y) => {
      ctx.fillStyle = getColor(day.contributionLevel, theme)
      ctx.fillRect(offsetX + (boxWidth + boxMargin) * x, offsetY + (boxHeight + boxMargin) * y, 10, boxHeight)
    })
  })
}
