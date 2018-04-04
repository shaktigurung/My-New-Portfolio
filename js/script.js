/*============================================
|||||Preloader|||||
=============================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*============================================
|||||Skills|||||
=============================================*/

$(function () {

    // jQuery
   // $('h1').hide(500).show(500);
    
    $("#skills").owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:100,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false
    
    });

});