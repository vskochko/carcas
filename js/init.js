$ = jQuery;
$(document).ready(function() {
    "use strict";
    $('.toogle_nav').click(function() {
        $(this).next().toggleClass('o_menu');
        $(this).toggleClass('is-active');
        return false;
    });
    $(".main_nav_container .menu-item-has-children>a").after('<i class="icf-down"></i>');
    $(".menu-item-has-children i").click(function(event) {
        $(this).toggleClass('icf-up').next().slideToggle("fast");
        // $(this);;
    });
    //BXslider
    $('.bx_slider ul').bxSlider({
        nextText: "<i class='icf-left'></i>",
        prevText: "<i class='icf-right'></i>",
        pause: 7000,
        // pager: false,
        auto: true,
        onSliderLoad: function() {
            $('.slider').addClass('slider_loaded ');
        }
    });
});
/* end ready*/
