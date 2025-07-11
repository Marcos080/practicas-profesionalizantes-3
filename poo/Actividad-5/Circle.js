import { Figure } from "./Figure.js";

export class Circle extends Figure {
     constructor(ID, x, y, color,radius){
        super(ID, x, y, color);
        this.Type = "C";
        this.radius = radius;
     }

     Draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
     }
    }