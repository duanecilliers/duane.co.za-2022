import { useCallback, useEffect, useRef } from 'react';

import useAnimationFrame from '@/hooks/useAnimationFrame';
import { drawContributions } from '@/modules/github/contributions';

type Props = {
  contributionWeeks: WeekContribution;
};

let lastTime = 0;

const ContributionsCanvas = ({ contributionWeeks }: Props) => {
  const weeks = useRef<WeekContribution>(contributionWeeks);
  // const [weeks, setWeeks] = useState<WeekContribution>(contributionWeeks);

  const drawCanvas = () => {
    const contributionsCanvas = document.getElementById(
      'contributions-canvas'
    ) as HTMLCanvasElement;

    if (contributionsCanvas && contributionWeeks) {
      drawContributions(contributionsCanvas, weeks.current, 'dark');
    }
  };

  useEffect(drawCanvas, []);

  const animateData = useCallback(
    (time: number) => {
      // console.log(('prevTime', prevTime), ('time', time));
      if (!lastTime || time - 250 > lastTime) {
        lastTime = time;
        weeks.current = weeks.current.slice(1, weeks.current.length);
        drawCanvas();
      }
    },
    [weeks]
  );

  useAnimationFrame(animateData);

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
