import { Particle, particleProps, particles } from "../modules/particle/parameters.js";
import { reDrawBackground, reDrawParticles, drawLines, particleSizeAnim } from "../modules/particle/draw.js";
function particleDisplay() {
    reDrawBackground();
    reDrawParticles();
    particleSizeAnim();
    drawLines();
    requestAnimationFrame(particleDisplay);
}
function particleInit() {
    var count = particleProps.count;
    for (var i = 0; i < count; i++)
        particles.push(new Particle);
    particleDisplay();
}
export { particleInit };
