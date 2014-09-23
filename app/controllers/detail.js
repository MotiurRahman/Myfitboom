var args = arguments[0] || {};
Alloy.Globals.value = true;
Alloy.Globals.index = $.view1.getView('menuView');
Alloy.Globals.view = $.mainView;
function menu() {
	if (Alloy.Globals.value) {
		$.mainView.animate({
			left : 200,
			duration : 300,
			curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		Alloy.Globals.value = false;

		Alloy.Globals.index.setZIndex(10);
	} else {
		$.mainView.animate({
			left : 0,
			duration : 200,
			curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		Alloy.Globals.value = true;
		Alloy.Globals.index.setZIndex(1);
	}
}
