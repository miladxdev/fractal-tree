let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw(x, y, len, angle, branchWidth) {
  ctx.lineWidth = branchWidth;

  ctx.beginPath();

  ctx.save();
  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgba(255,255,255,0.6)";
  ctx.strokeStyle = "#fafafa";
  ctx.translate(x, y);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgba(255,255,255,0.6)";

  if (len < 10) {
    ctx.restore();
    return;
  }

  draw(0, -len, len * 0.8, -40, branchWidth * 0.8);
  draw(0, -len, len * 0.8, +40, branchWidth * 0.8);

  ctx.restore();
}

draw(canvas.width / 2, canvas.height - 50, 160, 0, 8);
