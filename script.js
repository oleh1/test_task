jQuery(document).ready(function ($) {

    $('.menu__buttons > div').click(function () {
        var scroll = $(this).attr('data-scroll'),
            section = $('.section' + scroll);
        $('html,body').animate({scrollTop: section.offset().top}, 500);
    });

    function resize_window() {
        var i_w = 0,
            i_h = 0,
            e,
            object = $('.cadre object'),
            width = object.innerWidth() / 4,
            window_width = $(window).width();

        if(window_width <= 340){
            i_w = 18;
            i_h = 0;
            e = 0;
        }else if(window_width <= 430) {
            i_w = 10;
            i_h = 0;
            e = 0;
        }else if(window_width <= 450){
            i_w = 10;
            i_h = 0;
            e = 1;
        }else if(window_width <= 485){
            i_w = 20;
            i_h = 0;
            e = 1;
        }else if(window_width <= 545){
            i_w = 30;
            i_h = 0;
            e = 1;
        }else if(window_width <= 605){
            i_w = 60;
            i_h = 0;
            e = 1;
        }else if(window_width <= 654){
            i_w = 80;
            i_h = 0;
            e = 1;
        }else if (window_width <= 728) {
            i_w = 35;
            i_h = 10;
            e = 0;
        }else if (window_width <= 815) {
            i_w = 20;
            i_h = 10;
            e = 0;
        }else if(window_width <= 940) {
            i_w = 10;
            i_h = 10;
            e = 0;
        }else if(window_width >= 1300 && window_width <= 1450) {
            i_w = 40;
            i_h = 0;
            e = 1;
        }else if(window_width >= 1451){
            i_w = 0;
            i_h = 0;
            e = 1;
        }else{
            i_w = 0;
            i_h = 0;
            e = 0;
        }

        if(!e){
            $('.cadre__blocks > div').css({
                'left': width - i_w,
                'top': (width - 45) - i_h
            });
        }else{
            $('.cadre__blocks > div').css({
                'left': width + i_w,
                'top': (width - 45) + i_h
            });
        }
    }

    $(window).resize(function() {
        resize_window();
    });

    resize_window();

});