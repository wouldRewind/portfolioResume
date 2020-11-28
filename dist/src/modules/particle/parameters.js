import { w, h, ctx } from "./canvas.js";
var particles = [];
var particleProps = {
    bgColor: "#1F1F20",
    color: "#F1D5D7",
    count: innerWidth > 1000 ? 40 : innerWidth > 600 ? 20 : 15,
    maxVelocity: 1,
    lineLength: 150,
    maxRadius: 5,
    minRadius: 1
};
var Particle = /** @class */ (function () {
    function Particle() {
        var minRadius = particleProps.minRadius, maxRadius = particleProps.maxRadius, maxVelocity = particleProps.maxVelocity;
        this.animDirection = 1; // по умолчанию частичка растёт
        this.radius = Math.floor(maxRadius * Math.random() + minRadius);
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.velocityX = Math.random() * (maxVelocity * 2) - maxVelocity;
        this.velocityY = Math.random() * (maxVelocity * 2) - maxVelocity;
    }
    Particle.prototype.position = function () {
        if (this.x >= w || this.x <= 0)
            this.velocityX *= -1;
        if (this.y >= h || this.y <= 0)
            this.velocityY *= -1;
        this.x += this.velocityX;
        this.y += this.velocityY;
    };
    Particle.prototype.reDraw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleProps.color;
        ctx.fill(); // залив
        ctx.closePath();
    };
    return Particle;
}());
export { Particle, particleProps, particles };
