//Preloader
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

$(function () {

    // jQuery
    $('h1').hide(500).show(500);

});