(function () {
	'use strict';

	Polymer({
		is: 'st-stats',
<<<<<<< HEAD

		properties: {},

		ready() {
			const self = this;

			nodecg.listenFor('showStats', function() {
				document.getElementById('st-stats').style.display = 'block';
				self.$.data_container.innerHTML = 'SHOWED';
			});

=======

		properties: {},

		ready() {
			const self = this;

			nodecg.listenFor('showStats', function() {
				document.getElementById('st-stats').style.display = 'block';
				self.$.data_container.innerHTML = 'SHOWED';
			});

>>>>>>> 0e1bbf992a20f3c702f84985a122b64e270a1bfd
			nodecg.listenFor('hideStats', function() {
				document.getElementById('st-stats').style.display = 'none';
				self.$.data_container.innerHTML = 'HIDDEN';
			});
		}
	})
})();
