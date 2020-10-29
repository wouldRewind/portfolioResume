import {w,h,ctx} from "./canvas.js";
import {particleProps,particles} from "./parameters.js";


function reDrawParticles()
{
	for(let i in particles)
	{
		particles[i].position();
		particles[i].reDraw();
	}
}

function reDrawBackground()
{
	ctx.fillStyle = particleProps.bgColor;
	ctx.fillRect(0,0,w,h);
}

function joinParticles(x1,y1,x2,y2)
{
	ctx.lineWidth = 1;
	ctx.strokeStyle = particleProps.color;
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
	ctx.closePath();
}

function drawLines()
{
	let x1,y1,x2,y2,distance,opacity;
	for(let i in particles)
	{
		for(let j in particles)
		{
			x1 = particles[i].x;
			y1 = particles[i].y;

			x2 = particles[j].x;
			y2 = particles[j].y;

			distance = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2)); // расстояние между частичками

			if(distance < particleProps.lineLength)
			{
				joinParticles(x1,y1,x2,y2);
			}
		}
	}
}



export {reDrawBackground,reDrawParticles,drawLines};