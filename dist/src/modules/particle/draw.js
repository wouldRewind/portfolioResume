import { w, h, ctx } from "./canvas.js";
import { particleProps, particles } from "./parameters.js";
function reDrawParticles() {
    for (var i in particles) {
        particles[i].position();
        particles[i].reDraw();
    }
}
var growSpeed = 0.1;
function particleSizeAnim() {
    var maxRadius = particleProps.maxRadius, minRadius = particleProps.minRadius;
    particles.forEach(function (particle) {
        // если частичка ушла за пределы своего элемента
        if (particle.radius > maxRadius || particle.radius < minRadius)
            particle.animDirection *= -1;
        // приращение
        particle.radius += growSpeed * particle.animDirection;
    });
}
function reDrawBackground() {
    ctx.fillStyle = particleProps.bgColor;
    ctx.fillRect(0, 0, w, h);
}
function joinParticles(x1, y1, x2, y2) {
    ctx.strokeStyle = particleProps.color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}
function drawLines() {
    var x1, y1, x2, y2, length, opacity;
    for (var i in particles) {
        for (var j in particles) {
            x1 = particles[i].x;
            y1 = particles[i].y;
            x2 = particles[j].x;
            y2 = particles[j].y;
            length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            if (length < particleProps.lineLength) {
                var tripleLength = Math.pow(length, 3); // почему бы не вынести повторяющиеся литералы в переменные, Влад?)
                var hugeNum = 100000; // в чем логика?
                if (hugeNum / tripleLength > 1) {
                    ctx.lineWidth = 0.5;
                }
                else {
                    ctx.lineWidth = hugeNum / tripleLength;
                }
                ctx.strokeStyle = '#F1D5D7';
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}
export { reDrawBackground, reDrawParticles, drawLines, particleSizeAnim };
