(function ($) {
	$(document).on('scroll', function () {
		let value = window.scrollY;
		let height = window.screen.height;
		var stars = document.getElementById('stars');
		
		if(height >= 800) {
			stars.style.left = value * 0.2 + 'px';
		} else {
			stars.style.left = value * 0.5 + 'px';
		}

	});

	$(document).ready(function () {
		$('body').addClass('js');
		var $menu = $('#menu'),
			$menulink = $('.menu-link');

		$menulink.click(function () {
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
			return false;
		});

		window.history.forward(1);
	});

	videoPopup();

	$(document).on("click", ".naccs .menu div", function() {
		var numberIndex = $(this).index();

		if (!$(this).is("active")) {
				$(".naccs .menu div").removeClass("active");
				$(".naccs ul li").removeClass("active");

				$(this).addClass("active");
				$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

				var listItemHeight = $(".naccs ul")
					.find("li:eq(" + numberIndex + ")")
					.innerHeight();
				$(".naccs ul").height(listItemHeight + "px");
			}
	});


	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			550: {
				items: 2,
			},
			750: {
				items: 3,
			},
			1000: {
				items: 4,
			},
			1200: {
				items: 4,
			},
		},
	});

	$('.Modern-Slider').slick({
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		pauseOnDotsHover: true,
		cssEase: 'fade',
		// fade:true,
		draggable: false,
		prevArrow: '<button class="PrevArrow"></button>',
		nextArrow: '<button class="NextArrow"></button>',
	});

	$('div.features-post').hover(
		function () {
			$(this).find('div.content-hide').slideToggle('medium');
		},
		function () {
			$(this).find('div.content-hide').slideToggle('medium');
		}
	);

	$('#tabs').tabs();

	(function init() {
		function getTimeRemaining(endtime) {
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			return {
				total: t,
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds,
			};
		}

		function initializeClock(endtime) {
			var timeinterval = setInterval(function () {
				var t = getTimeRemaining(endtime);
				document.querySelector('.days > .value').innerText = t.days;
				document.querySelector('.hours > .value').innerText = t.hours;
				document.querySelector('.minutes > .value').innerText = t.minutes;
				document.querySelector('.seconds > .value').innerText = t.seconds;
				if (t.total <= 0) {
					clearInterval(timeinterval);
				}
			}, 1000);
		}
		initializeClock(new Date().getFullYear() + '/7/7');
	})();
})(jQuery);
