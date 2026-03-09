const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

canvasOOP.height = "200"; //window_height;
canvasOOP.width = "300"; //window_width;

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

class Circle {
  //Carga los valores predeterminados del objeto
  constructor(x, y, radius, color, text, backcolor, textColor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textColor = textColor;
  }

  //Método para renderizar el objeto
  draw(context) {
    //Rellena el objeto
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    //Dibuja la línea del objeto
    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    //Dibuja el texto al centro del objeto
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = this.textColor;
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

// Limitar el radio máximo al tamaño del canvas
let maxRadius = Math.min(canvasRandom.width, canvasRandom.height) / 2; // por ejemplo, máximo un cuarto del tamaño
let randomRadius = Math.floor(Math.random() * (maxRadius - 20) + 20); // mínimo 20, máximo maxRadius

// Asegurar que el círculo no se salga
let randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;


let miCirculoRandom = new Circle(randomX, randomY, randomRadius, "green", "Tec", "rgb(83, 186, 52)",  "rgb(17, 24, 36)");
miCirculoRandom.draw(ctxRandom);

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 80,"rgb(163, 22, 142)", "Tec", "rgb(66, 135, 245)", "rgb(17, 24, 36)");
miCirculo.draw(ctx);



function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

let maxCircles = 10;
let arrayCircle = [];

for (let i = 0; i < 5; i++) {

  let randomRadius = Math.floor(Math.random() * (maxRadius - 20) + 20);
  let randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
  let randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;

  let miCirculoMultiple = new Circle(randomX, randomY,randomRadius,
    randomColor(), // color del borde
    i + 1,         // texto
    randomColor(), // color de fondo
    "rgb(17, 24, 36)" // color del texto
  );

  arrayCircle.push(miCirculoMultiple);
  miCirculoMultiple.draw(ctxMultiple);

}