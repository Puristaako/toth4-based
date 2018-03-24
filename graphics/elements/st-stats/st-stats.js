
(function () {
	'use strict';

	Polymer({
		is: 'st-stats',

		properties: {},

		ready() {
			const self = this;

			nodecg.listenFor('showStats', function() {
				document.getElementById('st-stats').style.display = 'block';
				self.$.data_container.innerHTML = 'SHOWED';
			});

			nodecg.listenFor('hideStats', function() {
				document.getElementById('st-stats').style.display = 'none';
				self.$.data_container.innerHTML = 'HIDDEN';
			});
		}
	})
})();
