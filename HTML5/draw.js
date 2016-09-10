console.log("Hey the JS is working");

var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();

// ctx.fillStyle = "rgb(255,0,0)";
// ctx.fillRect(100,100,100,100);
// ctx.strokeStyle = "rgb(0,255,0)";
// ctx.strokeRect(80,80,140,140);
// ctx.clearRect(120,120,60,60);

// ctx.fillStyle = "rgb(150,245,100)";
// ctx.fillRect(0,0,300,300);
// ctx.clearRect(20,20,120,120);
// ctx.clearRect(160,20,120,120);
// ctx.clearRect(20,160,120,120);
// ctx.clearRect(160,160,120,120);

// ctx.fillRect(0,0,100,100);
// ctx.fillRect(200,0,100,100);
// ctx.fillRect(100,100,100,100);
// ctx.fillRect(0,200,100,100);
// ctx.fillRect(200,200,100,100);

var x = 0;
var y = 0;
var width = 300;
var height = 300;
ctx.fillRect(x,y,width,height);
while (width > 0) {
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx.clearRect(x,y,width,height);
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx.fillRect(x,y,width,height);
}