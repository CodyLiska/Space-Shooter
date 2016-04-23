//ENEMY CONSTRUCTOR


// SET MAIN NAMESPACE
goog.provide('chapter7.Enemy');

// GET REQUIREMENTS
goog.require('lime.Sprite');
goog.require('goog.math');
goog.require('chapter7.Bullet');

chapter7.Enemy = function() {

	// CALLING PARENT CONSTRUCTOR
	goog.base(this);

	this.setFill('img/enemy.png');

	// RANDOM LOCATIONS
	var x = goog.math.uniformRandom(0,480);
	var y = goog.math.uniformRandom(0,120);

	this.setPosition(x,y);

	// SHIP MOVEMENT
	lime.scheduleManager.schedule(function(dt) {

		Current_x = this.getPosition().x;
		current_y = this.getPosition().y;

		speed_x = goog.math.uniformRandom(-0.1,0.1);
		speed_y = goog.math.uniformRandom(0.01,0.02);

		// KEEPS ENEMIES ON SCREEN
		new_pos_x = current_x+speed_x*dt;

		if(new_pos_x < 0)
			new_pos_x = 0;

		if(new_pos_x > 480)
			new_pos_x = 480;

		this.setPosition(new_pos_x,current_y+speed_y*dt);

	}, this);

}

// CHAPTER7.BULLETS INHERITS FROM LIME.SPRITE
goog.inherits(chapter7.Enemy,lime.Sprite);