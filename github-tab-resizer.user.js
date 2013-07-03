// ==UserScript==
// @name           Github Tab Resizer
// @namespace      https://github.com/kolodny
// @description    Let's you change the size of tabs when viweing code of a repo
// @match          https://github.com/*
// @copyright      Moshe Kolodny
// @version        1.0.0
// @license        http://opensource.org/licenses/MIT
// ==/UserScript==

function main() {
	var div = document.createElement('div'),
		select = document.createElement('select'),
		insertBefore = document.getElementById('files');
		
	if (!insertBefore || document.getElementById('tab-size-changer')) { return; }
	
	select.id = 'tab-size-changer';
	for (var i = 0; i < 8; i++) {
		select.innerHTML += '<option>' + i + '</option>';
	}
	select.innerHTML += '<option>8</option>';

	select.onchange = function() {
		var selectedSize = this.options[this.options.selectedIndex].value,
			filesDiv = document.getElementById('files');
			
		filesDiv.style['-moz-tab-size'] = selectedSize;
		filesDiv.style['-o-tab-size'] = selectedSize;
		filesDiv.style['tab-size'] = selectedSize;
	};
	select.options[4].selected = true // default tabs size to 4
	select.onchange() // and fire the handler

	div.innerHTML = '<label>Select Tab Size: ';
	div.appendChild(select);

	insertBefore.parentNode.insertBefore(div, insertBefore);
}
	
main();
setInterval(main, 1000);

