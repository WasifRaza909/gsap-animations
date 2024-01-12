const animation = gsap.to(".arrow", {
  duration: 2,
  ease: "none",
  motionPath: {
    path: ".path",
    align: ".path",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
  yoyo: true,
  repeat: -1,
});

animation();
