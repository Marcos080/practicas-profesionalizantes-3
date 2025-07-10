import { Figure } from "./Figure.js";

export class Triangle extends Figure {
constructor(ID, x, y, color, posX, posY){
    super(ID, x, y, color);
    this.Type = "T";
    this.posX = posX;
    this.posY = posY; 
}

Draw(ctx){
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(0, -this.posY / 2);                        // vértice superior
    ctx.lineTo(-this.posX / 2, this.posY / 2);            // base izquierda
    ctx.lineTo(this.posX / 2, this.posY / 2);             // base derecha
    ctx.closePath();
    ctx.fill();   
    ctx.restore();
}

}