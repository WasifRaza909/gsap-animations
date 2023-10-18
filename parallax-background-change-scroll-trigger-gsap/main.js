gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
	ScrollTrigger.create({
		trigger: section,
		start: 'top top',
		pin: true,
		pinSpacing: false,
	});
});
