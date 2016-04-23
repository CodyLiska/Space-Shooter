// STAR CONSTRUCTOR

// SET MAIN NAMESPACE
goog.provide('chapter7.Star');

// GET REQUIREMENTS 
goog.require('lime.Circle');
goog.require('goog.math');


// RANDOM STARS IN SKY
chapter7.Star = function() {

	// CALLING PARENT CONSTRUCTOR
	goog.base(this);

	this.setAnchorPoint(0,0).setFill('#DFDFF0').setSize(2,2);

	var x = goog.math.uniformRandom(0,480);
	var y = goog.math.uniformRandom(0,320);

	this.setPosition(x,y);
}

// CHAPTER7.STAR INTERITS FROM LIME.CIRCLE
goog.inherits(chapter7.Star,lime.Circle);