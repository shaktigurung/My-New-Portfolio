/*============================================
|||||Preloader|||||
=============================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*============================================
|||||Navigation|||||
=============================================*/
function openSlideMenu(){
      document.getElementById('side-menu').style.width = '100%';
    }

    function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
    }
/*============================================
|||||Skill Bar|||||
=============================================*/

//$(document).ready(function(){
//        		$('.html').animate({width:'90%'},2000);
//        		$('.css').animate({width:'80%'},2000);
//        		$('.js').animate({width:'70%'},2000);
//        		$('.php').animate({width:'75%'},2000);
//        		$('.jquery').animate({width:'70%'},2000);
//                $('.bootstrap').animate({width:'85%'},2000);
//                $('.drupal').animate({width:'80%'},2000);
//                $('.wordpress').animate({width:'75%'},2000);
//                $('.git').animate({width:'80%'},2000);
//                $('.github').animate({width:'80%'},2000);
//        	});

function skillbar(){
$(document).ready(function(){
        		$('.html').animate({width:'90%'},2000);
        		$('.css').animate({width:'80%'},2000);
        		$('.js').animate({width:'70%'},2000);
        		$('.php').animate({width:'75%'},2000);
        		$('.jquery').animate({width:'70%'},2000);
                $('.bootstrap').animate({width:'85%'},2000);
                $('.drupal').animate({width:'80%'},2000);
                $('.wordpress').animate({width:'75%'},2000);
                $('.git').animate({width:'80%'},2000);
                $('.github').animate({width:'80%'},2000);
        	});
}