document.addEventListener('DOMContentLoaded', function() {
	const showSlider = new Swiper('.swiper', {
		loop: false,
		speed: 400,
		centeredSlides: false,
		direction: 'horizontal',
		cssMode: true,
		freeMode: false, // disable free mode
		keyboard: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		mousewheel: {
			sensitivity: 1,
			eventsTarget: ".swiper",
		},
		breakpoints: {
			320: {
				slidesPerView: 2, // allow multiple slides to be displayed on small screens
			},
			480: {
				slidesPerView: 2, // allow multiple slides to be displayed on small screens
			},
			640: {
				slidesPerView: 3,
			}
		},
	});
});

function toggleIngredientColor(button) {
	const ingredientId = button.dataset.ingredientId;
	const ingredientTd = button.closest('tr').querySelector('td:nth-child(3)');

	if (ingredientTd.classList.contains('js-checked')) {
		ingredientTd.classList.remove('js-checked');
	} else {
		ingredientTd.classList.add('js-checked');
	}
}