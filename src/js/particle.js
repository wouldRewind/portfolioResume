import {canvas,ctx,w,h} from "../modules/particle/canvas.js";
import {Particle,particleProps,particles} from "../modules/particle/parameters.js";
import {reDrawBackground,reDrawParticles,drawLines,particleSizeAnim} from "../modules/particle/draw.js";

function particleDisplay()
{
	reDrawBackground();
	reDrawParticles();
	particleSizeAnim();
	drawLines();
	requestAnimationFrame(particleDisplay)
}

function particleInit()
{
	const count = particleProps.count;
	for(let i = 0; i < count;i++)
		particles.push(new Particle);
	particleDisplay();
}

export {particleInit};

















