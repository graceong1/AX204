var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create: create, update: update});
var score = 0;
var life = 3;

function preload() {
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48); //loading spritesheet is different, you need to write width + height too
	game.loag.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE); //setting up whole physics engine
	// sky
	game.add.sprite(0, 0, 'sky');

	// group of platforms
	platforms = game.add.physicsGroup(); //creating new rule, creating new group
	platforms.enableBody = true; //able to grap platforms as whole and change it

	// ground
	var ground = platforms.create(0, game.world.height - 50, 'ground'); //game.world.height - 50 = 550
	ground.scale.setTo (2, 2);
	ground.body.immovable = true;

	// ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;

	// player
	player = game.add.sprite(32, 400, 'dude');
		// animate sprite 
		player.animations.add('left', [0, 1, 2, 3] 10, true);
		player.animations.add('right', [5, 6, 7, 8] 10, true);
		// add physics
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2; //this is how much in bounces
		player.body.gravity.y = 300; //has gravity of 300, always gonna fall when jumping
		player.body.collideWorldBounds = true; //able to keep player sprite inside canvas

	// enemies
	enemy1 = game.add.sprite(760, 520, 'baddie');
		// animate sprite 
		enemy1.animations.add('left', [0, 1] 10, true); 
		enemy1.animations.add('right', [3, 4] 10, true);
		// add physics
		game.physics.arcade.enable(enemy1);
		enemy1.body.bounce.y = 0.2; 
		enemy1.body.gravity.y = 500; 
		enemy1.body.collideWorldBounds = true;

	enemy2 = game.add.sprite(10, 20, 'baddie');
		// animate sprite 
		enemy2.animations.add('left', [0, 1] 10, true); 
		enemy2.animations.add('right', [3, 4] 10, true);
		// add physics
		game.physics.arcade.enable(enemy2);
		enemy2.body.bounce.y = 0.2; 
		enemy2.body.gravity.y = 500; 
		enemy2.body.collideWorldBounds = true;

	enemy3 = game.add.sprite(200, 20, 'baddie');
		// animate sprite 
		enemy3.animations.add('left', [0, 1] 10, true); 
		enemy3.animations.add('right', [3, 4] 10, true);
		// add physics
		game.physics.arcade.enable(enemy3);
		enemy3.body.bounce.y = 0.2; 
		enemy3.body.gravity.y = 500; 
		enemy3.body.collideWorldBounds = true;

	// set up keyboard events
	cursors = game.input.keyboard.createCursorKeys();

	// create stars
	stars = game.add.physicsGroup();
	stars.enableBody = true;
	// loop to create 12 stars
	for(var i = 0; 1 < 12; i++) {
		var star = stars.create(1 * 70, 0, 'star');
		star.body.gravity.y = 200; // gravity.y equals gravity up and down
		star.body.bounce.y = 0.2 + Math.random * 0.7;
	}

	// set up text
	var style = {font: "bold 32px Arial", fill: "#fff", boundsAlineH: "center", boundsAlginV: "middle"};
	// create and position text
	scorelabel = game.add.text(-60, 0, "Your score is: ", style);
	scoretext = game.add.text(70, 0, score, style);
	scorelabel.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	scoretext.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	scorelabel.setTextBounds(0, 520, 80, 100); // 0 & 520 are x & y, 80 & 100 are width & height
	scoretext.setTextBounds(0, 520, 80, 100);
}

function update() {
	// collision for player/enemy and the platforms
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy1, platforms);
	game.physics.arcade.collide(enemy2, platforms);
	game.physics.arcade.collide(enemy3, platforms);
	// resets player sprite speed
	player.body.velocity.x = 0;

	// if key pressed
	if (cursors.left.isDown) {
		player.body.velocity.x = -150; //moving to the left
		player.animations.play('left');
	} else if (cursors.right.isDown) {
		player.body.velocity.x = -150; //moving to the right
		player.animations.play('right');
	} else {
		// when player sprite stops
		player.animations.stop();
		player.frame = 4;
	}

	// enemy AI
	if (enemy1.x > 759) {
		enemy1.body.velocity.x = -120;
		enemy1.animaitons.play('left');
	} else if (enemy1.x < 405) {
		enemy1.body.velocity.x = 120;
		enemy1.animaitons.play('right');
	}

	if (enemy2.x > 200) {
		enemy2.body.velocity.x = -80;
		enemy2.animaitons.play('left');
	} else if (enemy2.x < 20) {
		enemy2.body.velocity.x = 80;
		enemy2.animaitons.play('right');
	}

	if (enemy3.x > 759) {
		enemy3.body.velocity.x = -150;
		enemy3.animaitons.play('left');
	} else if (enemy3.x < 200) {
		enemy3.body.velocity.x = 150;
		enemy3.animaitons.play('right');
	}

	// collide with stars
	game.physics.arcade.collide(stars, platforms);
	// define what happens when collision occurs - overlap
	game.physics.arcade.overlap(player, stars, collectStar, null, this); 
	game.physics.arcade.overlap(player, enemy1, losePoint, null, this);
	game.physics.arcade.overlap(player, enemy2, losePointLeft, null, this);
	game.physics.arcade.overlap(player, enemy3, losePoint, null, this);
}

// define collectStar
function CollectStar (player, star){
	star.kill();
	score = score + 1;
	scoretext.setText(score); //update score visually
	// creating new star
	star = stars.create(Math.floor(Math.random() * 750), 0, 'star'); //750 = width
	star.body.gravity.y = 200;
	star.body.bounce.y = 0.2 + Math.random * 0.7;
}

//define losePoint
function losePoint (player, enemy){
	enemy.kill();
	score = score - 5;
	scoretext.setText(score);
	enemy.reset(760, 20);
}

function losePointLeft (player, enemy){
	enemy.kill();
	score = score - 5;
	scoretext.setText(score);
	enemy.reset(10, 20);
}