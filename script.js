let nav = document.querySelectorAll( "#navbar" );

gsap.from( nav, {
    y: -100,
    duration: 2,
    ease: "power1.out",
} );