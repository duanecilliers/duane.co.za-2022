import { useCallback, useEffect, useRef } from 'react';

import useAnimationFrame from '@/hooks/useAnimationFrame';
import { drawContributions } from '@/modules/github/contributions';

type Props = {
  contributionDays: DayContribution[];
};

let lastTime = 0;

function moveElement(array: any[], initialIndex: number, finalIndex: number) {
  array.splice(finalIndex, 0, array.splice(initialIndex, 1)[0]);
  return array;
}

const ContributionsCanvas = ({ contributionDays }: Props) => {
  const days = useRef<DayContribution[]>(contributionDays);

  const drawCanvas = () => {
    const contributionsCanvas = document.getElementById(
      'contributions-canvas'
    ) as HTMLCanvasElement;

    if (contributionsCanvas) {
      drawContributions(contributionsCanvas, days.current, 'dark');
    }
  };

  useEffect(drawCanvas, []);

  const animateData = useCallback(
    (time: number) => {
      // console.log(('prevTime', prevTime), ('time', time));
      if (!lastTime || time - 1000 > lastTime) {
        lastTime = time;
        if (days.current !== undefined) {
          days.current = moveElement(days.current, 0, days.current.length);
        }
        drawCanvas();
      }
    },
    [days]
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
