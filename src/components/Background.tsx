/* eslint-disable functional/no-let */

/* eslint-disable functional/immutable-data */
import { useEffect, useRef } from 'react';
import { backgroundImages } from '../backgroundImages';
import { Canvas } from '../styles';

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);
      const draw = (backgroundImage: any) => {
        let { src, x, y, xSpeed, ySpeed, width, height } = backgroundImage;
        x = x + xSpeed;
        y = y + ySpeed;

        const image = new Image();
        image.src = src;

        if (x > canvas.width - image.width || x < 0) xSpeed = -xSpeed;
        if (y > canvas.height - image.height || y < 0) ySpeed = -ySpeed;

        context.drawImage(image, x, y, width, height);

        window.requestAnimationFrame(() => draw(backgroundImage));
      };
      const scaleCanvas = () => {
        const dpi = window.devicePixelRatio;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        context.scale(dpi, dpi);
      };

      scaleCanvas();
      backgroundImages.forEach((backgroundImage) =>
        window.requestAnimationFrame(() => draw(backgroundImage))
      );
    }
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default Background;
