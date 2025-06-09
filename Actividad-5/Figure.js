export class Figure {
constructor(ID, x, y, color){
      this.ID = ID;
      this.x = x;
      this.y = y;
      this.color = color; 
      this.angle = 0;
}


Draw(ctx){
    console.log("..........");
}

moveForward(distance) {
    this.x += Math.cos(this.angle) * distance;
    this.y += Math.sin(this.angle) * distance;
 }

moveBackward(distance) {
     this.x -= Math.cos(this.angle) * distance;
     this.y -= Math.sin(this.angle) * distance;
 }

rotate(deltaAngle) {
    this.angle += deltaAngle;
}

}

