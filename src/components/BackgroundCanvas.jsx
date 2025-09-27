import { useEffect, useRef } from "react";
import $ from "jquery";
import { FOUR } from "../tesseract/tesseract.js";

export function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const cubeRef = useRef(null);
  const rafRef = useRef(0);
  const intervalRef = useRef(0);
  const wAngleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const setSize = () => {
      const min = Math.min(window.innerWidth, window.innerHeight);
      canvas.width = min;
      canvas.height = min;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const cube = FOUR.create4DCube();
    cubeRef.current = cube;

    const amountScrolled = () => {
      const winheight = $(window).height();
      const docheight = $(document).height();
      const scrollTop = $(window).scrollTop();
      const trackLength = docheight - winheight;
      const pct = trackLength > 0 ? scrollTop / trackLength : 0;
      return pct;
    };

    let currPercScroll = amountScrolled();
    let camAngle = currPercScroll * -Math.PI;

    const onScroll = () => {
      currPercScroll = amountScrolled();
      camAngle = currPercScroll * -Math.PI;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const wDelta = 0.003;
    const tick = () => {
      FOUR.update3DMap(cube, wAngleRef.current, 3);
      const matrix = FOUR.getCenteringMatrix([
        0,
        Math.cos(camAngle),
        Math.sin(camAngle),
      ]);
      FOUR.update2DMap(cube, matrix, 3.7);
      FOUR.drawCube(ctx, canvas, cube);
      wAngleRef.current += wDelta;
    };

    intervalRef.current = window.setInterval(tick, 16);

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("scroll", onScroll);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div id="canvas-container" className="w-full h-full fixed top-0 flex justify-center items-center z-[1]">
      <canvas
        id="tesseract"
        ref={canvasRef}
        className="opacity-[0.7]"
        aria-hidden
      />
    </div>
  );
}