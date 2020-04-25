document.addEventListener('DOMContentLoaded', function () {
	var heroCarousel = document.querySelectorAll('.carousel');
	var instance = M.Carousel.init(heroCarousel[0], {
		fullWidth: true,
		indicators: true
	});
	var instances = M.Carousel.init(heroCarousel[1], {
		dist:0,
	});
	
});