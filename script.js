let nav = document.querySelectorAll( "#navbar" );

gsap.from( nav, {
    y: -100,
    duration: 1,
    opacity: 0,
    ease: "power1.out",
} );