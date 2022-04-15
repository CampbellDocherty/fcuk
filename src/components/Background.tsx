/* eslint-disable functional/no-let */

/* eslint-disable functional/immutable-data */
import { useEffect, useRef } from 'react';
import Eman1 from '../assets/eman-1.png';
import { Canvas } from '../styles';

let x = 0;
let y = 0;

let xSpeed = 1;
let ySpeed = 0.7;

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      const draw = () => {
        x = x + xSpeed;
        y = y + ySpeed;

        const image = new Image();
        image.src = Eman1;

        if (x > canvas.width - image.width || x < 0) xSpeed = -xSpeed;
        if (y > canvas.height - image.height || y < 0) ySpeed = -ySpeed;

        // context.fillStyle = '#333';
        // context.fillRect(0, 0, canvas.width, canvas.height);

        // context.fillStyle = '#eee';
        // context.fillRect(x, y, 20, 20);

        context.drawImage(image, x, y);

        window.requestAnimationFrame(draw);
      };

      const scaleCanvas = () => {
        // const dpi = window.devicePixelRatio;
        const dpi = 1;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';

        context.scale(dpi, dpi);
      };

      scaleCanvas();
      window.requestAnimationFrame(draw);
    }
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default Background;
