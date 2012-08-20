/**
 * Ticker created by in2code.de (alexander.kellner@in2code.de)
 */
$.fn.ticker = function(options) {
	// settings
	var $this = $(this);
	options = $.extend({
		width: 200, // width in px
		speed: 70, // speed indicator (int)
		loop: true // loop animation?
	}, options);

	// start
	$this.width(options.width);

	// element
	var thisElement = $this.find('li').first();
	animate(thisElement, options);

	// listen to mouseover
	this.find('li').live('mouseover', function() {
		$(this).stop();
	});
	this.find('li').live('mouseout', function() {
		animate($(this), options);
	});
};


/**
 * Animate Text
 *
 * @param object	Element to move
 * @param int		speed in ms
 * @return void
 */
function animate(thisElement, options) {
	thisElement.siblings().css('left', 0).hide(); // reset element position of siblings
	thisElement.css('display', 'inline-block'); // show this element
	var speed = options.speed * thisElement.html().length;
	var whereToAnimate = thisElement.width() * -1 + 'px';

	thisElement.animate({
		left: whereToAnimate,
	}, speed, function() {
		nextElement = thisElement.next();
		if (nextElement.length) {
			animate(nextElement, options);
		} else if (options.loop) {
			thisElement = thisElement.parent().children(':first');
			animate(thisElement, options);
		}
	});
}