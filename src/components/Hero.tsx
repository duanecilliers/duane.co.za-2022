// import { drawContributions } from '../utils/github'
// import { useEffect } from '@astrojs/react';
import { useEffect } from 'react';

import Socials from '@/components/Socials';
import { drawContributions } from '@/modules/github/contributions';

type Props = {
  contributions: ContributionsData;
};

const Hero = ({ contributions }: Props) => {
  useEffect(() => {
    const contributionsCanvas = document.getElementById(
      'contributions-canvas'
    ) as HTMLCanvasElement;
    if (contributionsCanvas && contributions) {
      drawContributions(
        contributionsCanvas,
        contributions.data.user.contributionsCollection,
        'dark'
      );
    }
  });

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
            <p className="py-6 leading-7 text-white text-sm md:text-xl">
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
              . Exploring advanced TypeScript, creative development and
              experimenting with the latest tech. This is where I&apos;ll be
              planting the seeds for my{' '}
              <a
                className="link font-bold"
                href="https://maggieappleton.com/garden-history"
                target="_blank"
                rel="noreferrer"
              >
                Digital Garden
              </a>
              .
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
