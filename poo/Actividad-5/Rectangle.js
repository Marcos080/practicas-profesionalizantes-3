import { Figure } from "./Figure.js";

export class Rectangle extends Figure {
      constructor(ID, x, y, color, height, width) {
        super(ID, x, y, color);
        this.Type = "R";
        this.height = height;
        this.width = width;
      }

      Draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
      }
    }