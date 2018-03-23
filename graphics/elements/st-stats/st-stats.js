
(function () {
	'use strict';

	nodecg.listenFor('showStats', function () {
		document.getElementById("st-stats").innerHTML = "SHOWED";
		document.getElementById("st-stats").style.display = "block";
	});

	nodecg.listenFor('hideStats', function () {
		document.getElementById("st-stats").innerHTML = "HIDDED";
		document.getElementById("st-stats").style.display = "none";
	});

})();
