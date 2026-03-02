gsap.registerPlugin(ScrollTrigger);

// Hide wave initially
gsap.set("#wave", { opacity: 0 });

// Morph ball → wave
gsap.timeline({
  scrollTrigger: {
    trigger: ".spacer",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
})
.to("#electron", {
  scale: 0,
  opacity: 0,
  duration: 1
})
.to("#wave", {
  opacity: 1,
  duration: 1
}, "<");

// Animate wave oscillation
gsap.to("#wavePath", {
  strokeDasharray: "5 10",
  strokeDashoffset: 100,
  repeat: -1,
  duration: 2,
  ease: "linear"
});