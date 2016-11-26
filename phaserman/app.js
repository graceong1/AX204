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
		player.animations.add('left', [0, 1] 10, true); //numbers in [] = which picss go left, 10 = refresh every 10 milliseconds, true = fire straight away, don't delay
		player.animations.add('right', [2, 3] 10, true);
		// add physics
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2; //this is how much in bounces
		player.body.gravity.y = 300; //has gravity of 300, always gonna fall when jumping
		player.body.collideWorldBounds = true; //able to keep player sprite inside canvas

	// enemies
	enemy1 = game.add.sprite(760, 520, 'baddie');
		// animate sprite 
		enemy1.animations.add('left', [0, 1, 2, 3] 10, true); 
		enemy1.animations.add('right', [5, 6, 7, 8] 10, true);
		// add physics
		game.physics.arcade.enable(enemy1);
		enemy1.body.bounce.y = 0.2; 
		enemy1.body.gravity.y = 500; 
		enemy1.body.collideWorldBounds = true;

	// set up keyboard events
	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	// collision for player/enemy and the platforms
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy1, platforms);
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


