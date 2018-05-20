// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker
const servicehandler = (function () {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js', {
			scope: './'
		}).then(function (registration) {
			var serviceWorker;
			if (registration.installing) {
				serviceWorker = registration.installing;
			} else if (registration.waiting) {
				serviceWorker = registration.waiting;
			} else if (registration.active) {
				serviceWorker = registration.active;
			}
			if (serviceWorker) {
				// logState(serviceWorker.state);
				serviceWorker.addEventListener('statechange', function (e) {
					// logState(e.target.state);
				});
			}
		}).catch(function (error) {
			// Something went wrong during registration. The service-worker.js file
			// might be unavailable or contain a syntax error.
		});
	}
})();

export default servicehandler;
