jQuery(function(){
$(function () {
$(window).scroll(function () {
if ($(this).scrollTop() > 200 ) { 
    $('#up').css('right','10px');
    $('#up').css('bottom','0px');
    $('#up').css('border','none');
} else { 
    $('#up').removeAttr( 'style' );
        }   
 
        });
    });
});