Alloy.Globals.navWin = $.navWin;
function emailLogin(e) {
	var signIn = Alloy.createController('signIn').getView();
	$.navWin.openWindow(signIn);
}

function fbLogin(e) {

}

$.navWin.open();
