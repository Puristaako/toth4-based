(function () {
	'use strict';

	const show = document.getElementById('show');
	const hide = document.getElementById('hide');

	show.addEventListener('click', () => {
		nodecg.sendMessage('showStats', 'show');
	});

	hide.addEventListener('click', () => {
		nodecg.sendMessage('hideStats', 'hide');
	});

})();
