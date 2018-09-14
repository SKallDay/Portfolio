$(function () {
    $("a").smoothScroll({ speed: 2000 });

    $('.ham-menu').click(function(){
        console.log('clicked the menu');
        $('.head-nav').slideToggle('slow');
    });

    // $('.ham-menu').click(function(){
    //     console.log('clicked again');
    //     $('.head-nav').hide();
        
    // }); 
});

const typed = new Typed('.header-p', {
    strings: ['Front End Web Developer'],
    typeSpeed: 60,
    loop: true,
    loopCount: 4,
    showCursor:false,

});
