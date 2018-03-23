(function () {
	'use strict';

	const onNow = nodecg.Replicant('onNow');
	const upNext = nodecg.Replicant('upNext');
	const cta1 = nodecg.Replicant('cta1');
	const cta2 = nodecg.Replicant('cta2');
	const onNowInput = document.getElementById('onNow');
	const upNextInput = document.getElementById('upNext');
	const onCta1Input = document.getElementById('cta1');
	const onCta2Input = document.getElementById('cta2');
	const onNowMonitor = document.getElementById('monitor-onNow');
	const upNextMonitor = document.getElementById('monitor-upNext');
	const cta1Monitor = document.getElementById('monitor-cta1');
	const cta2Monitor = document.getElementById('monitor-cta2');
	const take = document.getElementById('take');

	onNow.on('change', newVal => {
		onNowMonitor.innerText = newVal;
	});

	upNext.on('change', newVal => {
		upNextMonitor.innerText = newVal;
	});

	cta1.on('change', newVal => {
		cta1Monitor.innerText = newVal;
	});

	cta2.on('change', newVal => {
		cta2Monitor.innerText = newVal;
	});

	take.addEventListener('click', () => {
		onNow.value = onNowInput.value;
		upNext.value = upNextInput.value;
		cta1.value = onCta1Input.value;
		cta2.value = onCta2Input.value;
	});
})();
