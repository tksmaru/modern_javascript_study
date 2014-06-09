function init() {
	"use strict";
	var today = new Date();
	var message = 'today is ' + today.toLocaleDateString();
	message += ' and time is ' + today.getHours() + ':' + today.getMinutes();

	var output = document.getElementById('output');
	if (output.textContent !== undefined) {
		output.textContent = message;
	} else {
		output.innerText = message;
	}
}

window.onload = init;