// BULLET CONSTRUCTOR


// SET MAIN NAMESPACE
goog.provide('chapter7.Bullet');

goog.require('lime.Circle');
goog.require('goog.math');

chapter7.Bullet = function() {

	//call the parent constructor
	goog.base(this);

	this.setFill('#C6F022').setSize(5,7);

	this.speed = -0.2;

}

//chapter7.Bullet inherits from lime.Circle
goog.inherits(chapter7.Bullet,lime.Circle);