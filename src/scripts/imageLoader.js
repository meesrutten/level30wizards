const loadImagesOnIntersect = function() {
	const images = document.querySelectorAll('[data-src]');
	const config = {
		rootMargin: '0px 0px 0px 0px',
		threshold: 0
	};
	let loaded = 0;

	let imageObserver = new IntersectionObserver(function (entries, self) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// console.log(`Image ${entry.target.src} is in the viewport!`);
				preloadImage(entry.target);
				// Stop watching and load the image
				self.unobserve(entry.target);
			}
		});
	}, config);

	images.forEach(image => {
		imageObserver.observe(image);
	});

	function preloadImage(img) {
		const src = img.getAttribute('data-src');
		if (!src) { return; }
		img.src = src;
	}

}
export default loadImagesOnIntersect;