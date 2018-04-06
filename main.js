$(document).ready(function() {

    setTimeout(function() {
        $('.aropixel').removeClass('aropixel--loading').addClass('aropixel--animate');
    }, 500);

    setTimeout(function() {
        $('.aropixel-name').addClass('fade');
    }, 2400);

    setTimeout(function() {
        $('.aropixel-point').addClass('fade');
    }, 3900);

});