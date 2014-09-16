var args = arguments[0] || {};

function close() {
	var view = Alloy.createController('detail').getView();
	view.animate({
		left : 0,
		duration : 300,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});

}
