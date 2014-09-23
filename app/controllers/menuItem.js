var args = arguments[0] || {};

function close() {

	// var view = Alloy.createController('detail').getView();
	// var data =Alloy.Globals.value;

	Alloy.Globals.view.animate({
		left : 0,
		duration : 300,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});

	Alloy.Globals.index.setZIndex(1);
	Alloy.Globals.value = true;

}
