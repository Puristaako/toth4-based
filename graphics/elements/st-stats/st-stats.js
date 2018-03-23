
(function () {
	'use strict';

	nodecg.listenFor('showStats', function () {
		document.getElementById("data_container").innerHTML = "SHOWED";
		document.getElementById("data_container").style.display = "block";
	});

	nodecg.listenFor('hideStats', function () {
		document.getElementById("data_container").innerHTML = "HIDDED";
		document.getElementById("data_container").style.display = "none";
	});

})();
