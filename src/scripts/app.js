$(function () {
    AOS.init();


    $("a").smoothScroll({ speed: 2000 });

    $('.ham-menu').click(function(){
        console.log('clicked the menu');
        $('.head-nav').slideToggle('slow');
    });

    // $('.ham-menu').click(function(){
    //     console.log('clicked again');
    //     $('.head-nav').hide();
        
    // }); 

    const pressed = [];
    const code = "bensbagels";
    // let frameCount = 0;

    const finishbagels = () => {
        let bagel = document.getElementById("bagel-container");
        bagel.className = "hidden";
    }

    const trigger = () => {
        setTimeout(
            function () {
                finishbagels();
            }, 10000);
    }

    const startbagels = () => {
        let bagel = document.getElementById("bagel-container");
        bagel.className = "show";
        trigger();

    }

    window.addEventListener("keyup", function (e) {
        pressed.push(e.key);
        pressed.splice(-code.length - 1, pressed.length - code.length);

        if (pressed.join("").includes(code)) {
            startbagels();
        }

    }); 

    
});

const typed = new Typed('.header-p', {
    strings: ['Front End Web Developer'],
    typeSpeed: 60,
    showCursor:false,

});


