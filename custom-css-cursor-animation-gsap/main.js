let cursor = document.querySelector('.cursor'),
	cursorScale = document.querySelectorAll('.cursor-scale'),
	mouseX = 0,
	mouseY = 0;

gsap.to({}, 0.016, {
	repeat: -1,
	onRepeat: function () {
		gsap.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY,
			},
		});
	},
});

window.addEventListener('mousemove', (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

cursorScale.forEach((link) => {
	link.addEventListener('mouseenter', (e) => {
		cursor.classList.add('grow');

		if (link.classList.contains('small')) {
			cursor.classList.add('grow-small');
			cursor.classList.remove('grow');
		}
	});

	link.addEventListener('mouseleave', (e) => {
		cursor.classList.remove('grow');
		cursor.classList.remove('grow-small');
	});
});
