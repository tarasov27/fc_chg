$(document).ready(function () {
	$("#main-menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 2000);
    });
});

    $(window).resize(function() {
        if ($(window).width() < 1230 ) {
            $('ul li').removeClass("mx-5");
            $('ul li').addClass("mx-3");
        }
                if ($(window).width() < 991 ) {
            $('ul li').removeClass("d-flex");
        }
});