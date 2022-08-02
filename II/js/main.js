(function ($) {
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area #mainmenu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });
    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
    });
    /*WoW js Active
    =================*/
    new WOW().init({
        mobile: true,
    });
    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    $(".home-slide").responsiveSlides({
        auto: true, // Boolean: Animate automatically, true or false
        speed: 1000, // Integer: Speed of the transition, in milliseconds
        timeout: 10000, // Integer: Time between slide transitions, in milliseconds
        pager: true, // Boolean: Show pager, true or false
        nav: false,
    });
    /* Special Slider Active
    =============================*/
    $('.special-list').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    /* Plans Slider Active
    =============================*/
    $('.plans').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        items: 1,
    });
    /* Blogs Slider Active
    =============================*/
    $('.blogs').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    /*--------------------
       MAGNIFIC POPUP JS
       ----------------------*/
    var magnifPopup = function () {
        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    magnifPopup();
    $('#book-time').timepicker({
        'showDuration': true,
        'timeFormat': 'g:ia'
    });
    $('#book-date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
    });
    $('.tlt').textillate({
        loop: true,
    });
    var basicExampleEl = document.getElementById('booktable');
    var datepair = new Datepair(basicExampleEl);





    // Revolution slider
    var revapi;
    revapi = jQuery('.tp-banner').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 700,
        hideThumbs: 200,
        fullWidth: "on",
        forceFullWidth: "on"
    });
})(jQuery);