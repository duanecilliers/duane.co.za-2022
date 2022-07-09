import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { drawContributions } from '../utils/github'
import { trpc } from '../utils/trpc'

const Hero = () => {
  const contributions = trpc.useQuery(['github.contributions'], {
    refetchOnWindowFocus: false,
  })

  const { theme, systemTheme } = useTheme()
  const activeTheme: any = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    const contributionsCanvas = document.getElementById('contributions-canvas') as HTMLCanvasElement

    if (contributionsCanvas && contributions.status === 'success') {
      drawContributions(
        contributionsCanvas,
        contributions.data.contributions.data.user.contributionsCollection,
        activeTheme,
      )
    }
  }, [activeTheme, contributions])

  return (
    <div>
      <div className="hero min-h-screen min-w-screen">
        <canvas
          id="contributions-canvas"
          width={200}
          height={200}
          className="hidden lg:block w-screen h-screen absolute opacity-10 top-[128px] left-0 z-0"
        />
        <div className="hero-content">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-6xl font-bold font-primary">
              <span className="text-2xl mb-2 block">Duane Cilliers</span>
              Frontend Developer Based in Cape Town.
            </h1>
            <p className="py-6 leading-7">
              Currently working at{' '}
              <a className="link font-bold" href="https://reos.co.za/" target="_blank" rel="noreferrer">
                reOS
              </a>
              &nbsp;and&nbsp;
              <a className="link font-bold" href="https://trustprotects.me/" target="_blank" rel="noreferrer">
                Trust My Travel
              </a>
              . Exploring advanced TypeScript, creative development and toying with the latest tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
