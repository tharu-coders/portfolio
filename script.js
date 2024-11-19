// ==========================================================================
// GSAP Initialization
// ==========================================================================
gsap.registerPlugin( ScrollTrigger );

// ==========================================================================
// Custom Cursor
// ==========================================================================
const cursor = document.querySelector( '.cursor' );
const cursorFollower = document.querySelector( '.cursor-follower' );

document.addEventListener( 'mousemove', ( e ) =>
{
    gsap.to( cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0
    } );
    gsap.to( cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    } );
} );

// Cursor hover effects
const hoverElements = document.querySelectorAll( 'a, button, .tech-item, .work-item' );
hoverElements.forEach( element =>
{
    element.addEventListener( 'mouseenter', () =>
    {
        cursor.classList.add( 'active' );
        cursorFollower.classList.add( 'active' );
    } );
    element.addEventListener( 'mouseleave', () =>
    {
        cursor.classList.remove( 'active' );
        cursorFollower.classList.remove( 'active' );
    } );
} );

// ==========================================================================
// Navigation
// ==========================================================================
const menuBtn = document.querySelector( '.menu-btn' );
const navOverlay = document.querySelector( '.nav-overlay' );
const navLinks = document.querySelectorAll( '.nav-links a' );
let isMenuOpen = false;

// Toggle menu
function toggleMenu ()
{
    isMenuOpen = !isMenuOpen;
    menuBtn.classList.toggle( 'active' );
    navOverlay.classList.toggle( 'active' );
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    if ( isMenuOpen )
    {
        // Animate nav items
        gsap.from( navLinks, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        } );
    }
}

menuBtn.addEventListener( 'click', toggleMenu );

// Close menu when clicking nav links
navLinks.forEach( link =>
{
    link.addEventListener( 'click', () =>
    {
        if ( isMenuOpen )
        {
            toggleMenu();
        }
    } );
} );

// ==========================================================================
// Scroll Animations
// ==========================================================================

// Home Section Animation
function initHomeAnimations ()
{
    const tl = gsap.timeline( { delay: 0.5 } );

    tl.from( '.main-title .line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
    } )
        .from( '.scroll-indicator', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5" );
}

// About Section Animations
function initAboutAnimations ()
{
    gsap.from( '.about-text', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    } );

    gsap.from( '.about-image', {
        scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    } );


}

// Skills Section Animations
function initSkillsAnimations ()
{
    const skillItems = document.querySelectorAll( '.skill-item' );
    skillItems.forEach( item =>
    {
        const progress = item.getAttribute( 'data-progress' );
        gsap.to( item.querySelector( '.progress-fill' ), {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%'
            },
            scaleX: progress / 100,
            duration: 1.5,
            ease: "power4.out"
        } );
    } );
}


// Work Section Animations
function initWorkAnimations ()
{
    gsap.from( '.work-item', {
        scrollTrigger: {
            trigger: '.work-grid',
            start: 'top 80%'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
    } );
}


// ==========================================================================
// Initialize Everything
// ==========================================================================
window.addEventListener( 'load', () =>
{
    initHomeAnimations();
    initAboutAnimations();
    initSkillsAnimations();
    initWorkAnimations();
    initContactAnimations();
} );

// Update active nav link on scroll
window.addEventListener( 'scroll', () =>
{
    let current = '';
    const sections = document.querySelectorAll( 'section' );

    sections.forEach( section =>
    {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if ( pageYOffset >= ( sectionTop - sectionHeight / 3 ) )
        {
            current = section.getAttribute( 'id' );
        }
    } );

    navLinks.forEach( link =>
    {
        link.classList.remove( 'active' );
        if ( link.getAttribute( 'href' ).slice( 1 ) === current )
        {
            link.classList.add( 'active' );
        }
    } );
} );