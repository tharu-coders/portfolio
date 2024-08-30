let menu = document.querySelector( "#home .fa-solid" );
let cross = document.querySelector( "#navbar i" );


let tl = gsap.timeline();

tl.to( "#navbar", {
    right: 0,
    duration: 0.8
} );

tl.pause();

menu.addEventListener( "click", function ()
{
    tl.play();

} );

cross.addEventListener( "click", function ()
{
    tl.reverse();
} )






