import {w,h,ctx} from "./canvas.js";
const particles = [];

const particleProps = {
	bgColor: "#1F1F20",
	color: "#F1D5D7",
	count: 60,
	maxVelocity: 1,
	lineLength: 150,
	maxRadius: 5,
	minRadius: 1
}

class Particle {
	constructor()
	{
		const {minRadius,maxRadius,maxVelocity} = particleProps;
		this.animDirection = 1; // по умолчанию частичка растёт
		this.radius = Math.floor(maxRadius * Math.random() + minRadius);
		this.x = Math.random() * w;
		this.y = Math.random() * h;
		this.velocityX = Math.random() * (maxVelocity * 2) - maxVelocity;
		this.velocityY = Math.random() * (maxVelocity * 2) - maxVelocity;
	}
	position()
	{
		if(this.x > w || this.x < 0) this.velocityX*=-1;
		if(this.y > h || this.y < 0) this.velocityY*=-1;

		this.x+=this.velocityX;
		this.y+=this.velocityY;
	}
	reDraw()
	{
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
		ctx.fillStyle = particleProps.color;
		ctx.fill() // залив
		ctx.closePath();
	}
}

export {Particle,particleProps,particles};