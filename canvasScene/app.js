console.log("WORKING");
//sprites loading
var mario = new Image();
var tree = new Image();
var house = new Image();
var starcoin = new Image();
mario.src = "mario.png";
tree.src = "tree.png";
house.src = "house.png";
starcoin.src = "starcoin.png";

//draw our sprite
mario.onload = function(){
	ctx3.drawImage(mario,150,300,50,100);
}
tree.onload = function(){
	ctx3.drawImage(tree,350,200,150,150)
}
house.onload = function(){
	ctx3.drawImage(house,550,250,100,110)
}
starcoin.onload = function(){
	ctx3.drawImage(starcoin,50,270,50,80)
}

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
