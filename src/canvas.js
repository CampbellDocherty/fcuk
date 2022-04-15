/* eslint-disable no-undef */

/* eslint-disable functional/immutable-data */

/* eslint-disable functional/no-let */
import Eman1 from './assets/eman-1.png';

const dpi = window.devicePixelRatio;
let canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image();
image.src = Eman1;

const draw = () => {
  x = x + x_speed;
  y = y + y_speed;

  if (x > canvas.width - 20 || x < 0) x_speed = -x_speed;
  if (y > canvas.height - 20 || y < 0) y_speed = -y_speed;

  ctx.fillStyle = '#333';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#eee';
  ctx.fillRect(x, y, 20, 20);
  window.requestAnimationFrame(draw);
};

window.requestAnimationFrame(draw);

const scaleCanvas = () => {
  canvas.width = window.innerWidth * dpi;
  canvas.height = (window.innerHeight - 6) * dpi;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight - 6 + 'px';

  y_center = canvas.height / 2 / dpi;
  x_center = canvas.width / 2 / dpi;

  ctx.textAlign = 'left';
  ctx.scale(dpi, dpi);
};

scaleCanvas();

window.addEventListener('resize', () => {
  scaleCanvas();
});
