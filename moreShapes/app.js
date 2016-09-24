console.log("Everything is working");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(0,0); 
ctx.lineTo(300,300); 
ctx.lineTo(300,150); //150,300 before checked//
ctx.lineTo(0,150);
ctx.closePath(); 
ctx.moveTo(150,0);
ctx.lineTo(150,300); //300,0 before checked//
ctx.lineTo(0,300);
ctx.lineTo(300,0); //150,300 before checked
ctx.closePath();
ctx.stroke(); 
ctx.fillStyle = "red";
ctx.fill();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.arc(100,100,50,0,6.28);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "linen";
ctx2.fill();

var c3 = document.getElementById("scenery");
var ctx3 = c3.getContext("2d");
ctx3.fillStyle = "green";
ctx3.fillRect(0,350,800,150);
ctx3.fillStyle = "cyan";

//sun
ctx3.fillRect(0,0,800,350);
ctx3.arc(100,100,50,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "yellow";
ctx3.fill();

//road
ctx3.beginPath();
ctx3.moveTo(300,500);
ctx3.lineTo(350,350);
ctx3.lineTo(400,350);
ctx3.lineTo(450,500);
ctx3.fillStyle = "grey";
ctx3.fill();
ctx3.stroke();
ctx3.closePath();
//line in road
ctx3.moveTo(375,500);
ctx3.strokeStyle = "white";
ctx3.lineTo(375, 500);
ctx3.stroke();

//building
ctx3.fillRect(560,250,200,100);
//door
ctx3.clearRect(575,265,40,40);
ctx3.fillStyle = "orange";
//roof
ctx3.fillRect(620,240,60,110);
ctx3.beginPath();
ctx3.moveTo(535,250);
ctx3.lineTo(660,200);
ctx3.lineTo(785,250);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "peru";
ctx3.fill();