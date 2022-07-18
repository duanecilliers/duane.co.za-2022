import { useCallback, useEffect, useRef } from 'react';

import useAnimationFrame from '@/hooks/useAnimationFrame';
import { drawContributions } from '@/modules/github/contributions';

type Props = {
  contributionWeeks: WeekContribution;
};

let lastTime = 0;

function moveElement(array: any[], initialIndex: number, finalIndex: number) {
  array.splice(finalIndex, 0, array.splice(initialIndex, 1)[0]);
  return array;
}

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
      if (!lastTime || time - 1000 / 5 > lastTime) {
        lastTime = time;
        if (weeks.current !== undefined) {
          weeks.current = moveElement(weeks.current, 0, weeks.current.length);
        }
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
