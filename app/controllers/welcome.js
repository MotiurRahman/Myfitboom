var args = arguments[0] || {};

function onback() {
	$.navWin.close();
}

function welcomeImg(argument) {
	var detail = Alloy.createController('detail').getView();

	$.navWin.openWindow(detail);
}