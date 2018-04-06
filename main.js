$(document).ready(function() {

    setTimeout(function() {
        $('.aropixel').removeClass('aropixel--loading').addClass('aropixel--animate');
    }, 500);

    setTimeout(function() {
        $('.aropixel').addClass('aropixel--name');
    }, 2400);

    setTimeout(function() {
        $('.aropixel').addClass('aropixel--point');
    }, 3900);

});