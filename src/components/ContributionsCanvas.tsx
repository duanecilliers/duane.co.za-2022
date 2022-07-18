import { useEffect } from 'react';

import { drawContributions } from '@/modules/github/contributions';

type Props = {
  contributions: ContributionsData;
};

const ContributionsCanvas = ({ contributions }: Props) => {
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
    <canvas
      id="contributions-canvas"
      width={200}
      height={200}
      className="lg:block w-screen h-screen absolute top-0 left-0 z-0 opacity-20"
    />
  );
};

export default ContributionsCanvas;
