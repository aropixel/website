$(document).ready(function() {

	resizeLogo();
	$(window).resize(resizeLogo);
	$(window).scroll(hideArrow);

    setTimeout(function() {
        $('.aropixel').removeClass('aropixel--loading').addClass('aropixel--animate');
    }, 500);

    setTimeout(function() {
        $('.aropixel').addClass('aropixel--name');
    }, 2400);

    setTimeout(function() {
        $('.aropixel').addClass('aropixel--point');
    }, 3900);

    setTimeout(function() {
        $('.notvisible').addClass('show');
    }, 4200);

	/* ---------------------------------------------
	 isotope | init Isotope
	 --------------------------------------------- */

	var $container = $(".portfolio:not(.portfolio-masonry)");
	if ($.fn.imagesLoaded && $container.length > 0) {
	    imagesLoaded($container, function () {
	        setTimeout(function () {
	            $container.isotope({
	                itemSelector: '.portfolio-item',
	                layoutMode: 'fitRows',
	                filter: '*'
	            });

	            $(window).trigger("resize");
	            // filter items on button click
	        }, 500);

	    });
	}

});

function resizeLogo() {

	var logoHeight = $(window).height() - 200;
	var minLogoHeight = 500;

	logoHeight = Math.max(logoHeight, minLogoHeight);
	$('.aropixel-logo').height(logoHeight);


	var sectionHeight = $(window).height();
	var minSectionHeight = 700;

	sectionHeight = Math.max(sectionHeight, minSectionHeight);
	$('.aropixel-hero').height(sectionHeight);

}

function hideArrow() {

	if ($(window).scrollTop() > 80) {
		$('.arrow').fadeOut('slow');
	}
	else {
		$('.arrow').fadeIn('fast');
	}


}