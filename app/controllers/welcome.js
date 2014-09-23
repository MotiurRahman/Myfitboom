var args = arguments[0] || {};

function welcomeImg(argument) {
	var detail = Alloy.createController('detail').getView();

	Alloy.Globals.navWin.openWindow(detail);
}