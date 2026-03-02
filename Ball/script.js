const ball = document.getElementById("ball");
const box = document.getElementById("box");

let x = 200;
let y = 200;

let vx = 1;   // velocity in x
let vy = 1;   // velocity in y

// Read ball size from CSS so script and style match.
const computed = getComputedStyle(ball);
const diameter = parseFloat(computed.width) || 40; // fallback to 40px if parse fails
const radius = diameter / 2;

function animate() {
  const boxWidth = box.clientWidth;
  const boxHeight = box.clientHeight;

  x += vx; // x is the right top corner of the ball, so we add the radius to get the center
  y += vy;

  if (x <= 0 || x + diameter >= boxWidth) {
    vx = -vx;
  }

  if (y <= 0 || y + diameter >= boxHeight) {
    vy = -vy;
  }

  ball.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animate);
}

animate();