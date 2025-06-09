import { Rectangle } from "./Rectangle.js";
import { Circle } from "./Circle.js";

export class ControllerFigure {
  constructor(ctx) {
    this.figures = [];
    this.i = 0;
    this.ctx = ctx;
    window.addEventListener("keydown", this.handleKey.bind(this));
  }

  rectangleData(color) {
    const ID = prompt("Ingrese el nombre del rectángulo:");
    const x = parseInt(prompt("Ingrese la posición X del rectángulo:"));
    const y = parseInt(prompt("Ingrese la posición Y del rectángulo:"));
    const height = parseInt(prompt("Ingrese el alto del rectángulo:"));
    const width = parseInt(prompt("Ingrese el ancho del rectángulo:"));
    return new Rectangle(ID, x, y, color, height, width);
  }

  circleData(color) {
    const ID = prompt("Ingrese el nombre del círculo:");
    const x = parseInt(prompt("Ingrese la posición X del círculo:"));
    const y = parseInt(prompt("Ingrese la posición Y del círculo:"));
    const radius = parseInt(prompt("Ingrese el radio del círculo:"));
    return new Circle(ID, x, y, color, radius);
  }

  addFigure(figure) {
    this.figures.push(figure);
    this.drawAll();
  }

  selectFigure(index) {
    if (index >= 0 && index < this.figures.length) {
      this.i = index;
      console.log(`Figura seleccionada: ${index}`);
    } else {
      console.warn(`Índice fuera de rango: ${index}`);
    }
  }

  listFigures() {
  const listaContainer = document.getElementById("lista");
  listaContainer.innerHTML = "";

  for (let i = 0; i < this.figures.length; i++) {
    const fig = this.figures[i];
    const tipo = fig.Type;
    const id = fig.ID;

    const item = document.createElement("li");
    item.textContent = `[${i}] Tipo: ${tipo}, ID: ${id}`;
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      this.selectFigure(i);

    });

    listaContainer.appendChild(item);
  }
}


  handleKey(event) {
    if (!this.figures[this.i]) return;
    const step = 25;
    const rotationStep = Math.PI / 32;

    switch (event.key) {
      case "ArrowUp":
        this.figures[this.i]?.moveForward(step);
        break;
      case "ArrowDown":
        this.figures[this.i]?.moveBackward(step);
        break;
      case "ArrowLeft":
        this.figures[this.i]?.rotate(-rotationStep);
        break;
      case "ArrowRight":
        this.figures[this.i]?.rotate(rotationStep);
        break;
    }

    this.clearCanvas();
    this.drawAll();
  }

  drawAll() {
    for (const fig of this.figures) {
      fig.Draw(this.ctx);
    }
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}
