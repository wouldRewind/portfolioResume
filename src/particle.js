import {canvas,ctx,w,h} from "./modules/particle/canvas.js";
import {Particle,particleProps,particles} from "./modules/particle/parameters.js";
import {reDrawBackground,reDrawParticles,drawLines} from "./modules/particle/draw.js";

function particleDisplay()
{
	reDrawBackground();
	requestAnimationFrame(particleDisplay);
}

function particleInit()
{
	for(let i = 0; i < particleProps.count;i++)
		particles.push(new Particle);
	particleDisplay();
}









particleInit();

















