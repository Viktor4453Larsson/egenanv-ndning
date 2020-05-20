/* Det vi ska använda i systemet */
const eCanvas = document.querySelector("canvas");

/* Bredden och höjden på canvas */
eCanvas.width = 1500; 
eCanvas.height = 1250; 
eCanvas.style.backgroundColor = "red";

var ctx = eCanvas.getContext("2d");

ctx.fillStyle = "black";
ctx.font = "30px sans-serif";

/* Rita notbladet */
/* Utkanten av notbladet */
ctx.fillStyle = "#222222";
ctx.strokeRect(200, 100, 700, 800);
/* Första stycket */
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(300, 900);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.lineTo(400, 900);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(500, 100);
ctx.lineTo(500, 900);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(600, 100);
ctx.lineTo(600, 900);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(700, 100);
ctx.lineTo(700, 900);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(800, 100);
ctx.lineTo(800, 900);
ctx.stroke();
/* Andra stycket */
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 175);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 225);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.moveTo(200, 250);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.moveTo(200, 275);
ctx.lineTo(1000000, 100);
ctx.stroke();
/* Tredje stycket */
ctx.beginPath();
ctx.moveTo(200, 350);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 375);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 400);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 425);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.moveTo(200, 450);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.moveTo(200, 475);
ctx.lineTo(1000000, 100);
ctx.stroke();
/* Fjärde stycket */
ctx.moveTo(200, 550);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 575);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 600);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 625);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.moveTo(200, 650);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.moveTo(200, 675);
ctx.lineTo(1000000, 100);
ctx.stroke();
/* Femte och sista stycket */
ctx.beginPath();
ctx.moveTo(200, 750);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 775);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 800);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 825);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.moveTo(200, 850);
ctx.lineTo(1000000, 100);
ctx.stroke();
ctx.moveTo(200, 875);
ctx.lineTo(1000000, 100);
ctx.stroke();

