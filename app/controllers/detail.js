var args = arguments[0] || {};
var value = true;
var data = $.view1.getView('menuView');
function menu() {
	if (value) {
		$.mainView.animate({
			left : 200,
			duration : 300,
			curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		value = false;

		data.setZIndex(10);
	} else {
		$.mainView.animate({
			left : 0,
			duration : 200,
			curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		value = true;
		data.setZIndex(1);
	}
}
