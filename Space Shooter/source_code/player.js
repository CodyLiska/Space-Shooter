// PLAYER CONSTRUCTOR


// SET MAIN NAMESPACE
goog.provide('chapter7.Player');

// GET REQUIREMENTS 
goog.require('lime.Sprite');
goog.require('chapter7.Bullet');

chapter7.Player = function() {

	// PARENT CONSTRUCTOR
	goog.base(this);

	this.setFill('img/rocket.png').setSize(40,70);

	this.bullets = [];
}

// CHAPTER7.BULLETS INHERITS FROM LIME.SPRITE
goog.inherits(chapter7.Player,lime.Sprite);