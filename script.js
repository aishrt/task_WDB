$(document).ready(function() {

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header2").addClass("active");
            $(".header2 .colm-2 ul li a").addClass("active2");
            $(".header2 .colm-3 ul li a").addClass("active2");
            $(".header2 .colm-3 ul li a i").addClass("active2");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header2").removeClass("active");
           $(".header2 .colm-2 ul li a").removeClass("active2");
           $(".header2 .colm-3 ul li a").removeClass("active2");
           $(".header2 .colm-3 ul li a i").removeClass("active2");

        }
    });


/*-------------------------------Caraousle 1---------------------------*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:false,
    animateOut: 'slideOutUp',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


});
