"use client";

import { JSX, useEffect, useRef } from "react";

export interface GooglyEyeProps {
  className?: string;
}

const GooglyEye = ({ className }: GooglyEyeProps): JSX.Element => {
  const pupilRef = useRef<HTMLDivElement>(null);

  /**
   *  Attaches the movePupil function to the mousemove event
   */
  useEffect(() => {
    addEventListener("mousemove", movePupil);
    return () => {
      removeEventListener("mousemove", movePupil);
    };
  }, []);

  /**
   *  Moves the pupils in response to the mouse position
   * @param event The mousemove event
   */
  const movePupil = (event: MouseEvent): void => {
    requestAnimationFrame(() => {
      if (pupilRef.current) {
        pupilRef.current.style.left = `${
          (event.pageX / window.innerWidth) * 60
        }%`;
        pupilRef.current.style.top = `${
          (event.pageY / window.innerHeight) * 60
        }%`;
      }
    });
  };

  return (
    <div
      className={
        "absolute bg-white min-w-4 min-h-4 w-[4vw] h-[4vw] max-w-[20px] max-h-[20px] rounded-full overflow-hidden " +
        className
      }
    >
      <div
        ref={pupilRef}
        className="absolute top-[25%] left-[25%] w-[50%] h-[50%] bg-black rounded-full overflow-hidden"
      />
    </div>
  );
};

export default GooglyEye;
