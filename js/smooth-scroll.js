$.fn.smoothScroll = function(speed, easing) {
	$(this).click(function() {
		$('html,body').stop().animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, speed, easing)
	})
}
