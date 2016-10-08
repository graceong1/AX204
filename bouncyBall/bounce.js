console.log("AAAAAAA");

// declaring all variables at the top (Elevation of Scope)
var canvas;
var ctx;
// holding some coordinates
var x = 600;
var y = 300;
// holding the magnitude of our movement
var mx = 2; // mx = movement of x
var my = 4; // my = movement of y
// holding the width and height of canvas
var width = 600;
var height = 300;


// initialise our animation
function init() {
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	return setInterval(draw, 10) // 10 = 10 milliseconds
}

// draw circle
function circle(x, y, r) { // r = radius
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2); // Math.PI*2 gets the exact 2 PI w/o 6.28
	ctx.fillStyle = "tomato";
	ctx.fill();
} 

// clear our camvas
function clear() {
	ctx.clearRect(0,0, width, height);
}

// draw function to create frame
function draw() {
	clear();
	circle(x, y, 30); // 30 = radius
	// stay inside canvas
	if(x + mx > width || x + mx < 0) { // || = or (shift + button under delete)
		mx = -mx;
	}
	if(y + my > height || y + my < 0) {
		my = -my;
	}
	// move our shape by incrementing the position by the magnitude of movement
	x += mx; // += means same as x = x + mx
	y += my;
}

init()