let text = document.querySelector('h1'),
	char = document.querySelectorAll('span'),
	replaceChar = document.querySelectorAll('span:not([data-char="."])');

const tl = gsap.timeline();

tl.set(char, {
	yPercent: -110,
});

tl.set(text, {
	autoAlpha: 1,
});

tl.to(char, {
	duration: 1,
	yPercent: 0,
	stagger: 0.05,
	ease: 'expo.inOut',
}).to(replaceChar, {
	repeat: -1,
	yoyo: true,
	duration: 1,
	yPercent: 110,
	ease: 'expo.inOut',
	stagger: 0.1,
});
