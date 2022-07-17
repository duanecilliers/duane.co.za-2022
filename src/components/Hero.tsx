// import { drawContributions } from '../utils/github'
// import { useEffect } from '@astrojs/react';
import Socials from '@/components/Socials';

const Hero = () => {
  // const activeTheme: string = 'dark';

  // useEffect(() => {
  //   const contributionsCanvas = document.getElementById('contributions-canvas') as HTMLCanvasElement

  //   if (contributionsCanvas && contributions.status === 'success') {
  //     drawContributions(
  //       contributionsCanvas,
  //       contributions.data.contributions.data.user.contributionsCollection,
  //       activeTheme,
  //     )
  //   }
  // }, [activeTheme, contributions])

  return (
    <div>
      <div className="hero min-h-screen min-w-screen">
        <canvas
          id="contributions-canvas"
          width={200}
          height={200}
          className="lg:block w-screen h-screen absolute opacity-10 top-0 left-0 z-0 pt-48"
        />
        <div className="hero-content">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-6xl font-bold font-primary">
              <span className="text-xl md:text-2xl mb-2 block">
                Duane Cilliers
              </span>
              Frontend Developer Based in Cape Town.
            </h1>
            <p className="py-6 leading-7 text-black dark:text-white text-sm md:text-xl">
              Currently working at{' '}
              <a
                className="link font-bold"
                href="https://reos.co.za/"
                target="_blank"
                rel="noreferrer"
              >
                reOS
              </a>
              &nbsp;and&nbsp;
              <a
                className="link font-bold"
                href="https://trustprotects.me/"
                target="_blank"
                rel="noreferrer"
              >
                Trust My Travel
              </a>
              . Exploring advanced TypeScript, creative development and toying
              with the latest tech. This is where I&apos;ll be planting the
              seeds for my Digital Garden.
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
