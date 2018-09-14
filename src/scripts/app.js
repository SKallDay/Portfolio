$(function () {
    $("a").smoothScroll({ speed: 2000 });

    $('ham-menu').click(function(){
        ('head-nav').show('slow');
    });
 
});

const typed = new Typed('.header-p', {
    strings: ['Front End Web Developer'],
    typeSpeed: 60,
    loop: true,
    loopCount: 4,
    showCursor:false,

});
