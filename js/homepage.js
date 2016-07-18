$(function() {
	pageInitModule.setWidth();
	pageInitModule.setSidebar();
	pageInitModule.setCarousel();
})
$(window).resize(function() {
	pageInitModule.setWidth();
})
$(window).scroll(function() {
	pageInitModule.setScrollToTop();
});

/*
 * init page when page load
 */
var pageInitModule = (function(mod) {
	mod.setCarousel = function() {
		try {
			$('.carousel').hammer().on('swipeleft', function() {
				$(this).carousel('next');
			});
			$('.carousel').hammer().on('swiperight', function() {
				$(this).carousel('prev');
			});
		} catch(e) {
			console.log("you mush import hammer.js and jquery.hammer.js to let the carousel can be touched on mobile");
		}
	};
	mod.setWidth = function() {
		if($(window).width() < 768) {
			$(".sidebar").animate({
				left: -220
			});
			$(".all").animate({
				marginLeft: 0
			});
		} else {
			$(".sidebar").animate({
				left: 15
			});
			$(".all").animate({
				marginLeft: 220
			});
		}
	};
	mod.setScrollToTop = function () {
        var top = $(window).scrollTop();
        if (top < 60) {
            $('#goTop').fadeOut("slow");
        } else {
            $('#goTop').fadeIn("slow");
        }
    };
	mod.setSidebar = function() {
		$('[data-target="sidebar"]').click(function() {
			var asideleft = $(".sidebar").offset().left;
			if(asideleft == 0) {
				$(".sidebar").animate({
					left: -220
				});
				$(".all").animate({
					marginLeft: 0
				});
			} else {
				$(".sidebar").animate({
					left: 15
				});
				$(".all").animate({
					marginLeft: 220
				});
			}
		});

		$("ul.collapse > li > a").click(function() {
			$(this).parent().addClass("active");
			$(function() {
				$('body html').pace();
			});
			$(this).parent().siblings().removeClass("active");
			$(this).parent().parent().parent().siblings().find("li").removeClass("active");
			
		})

	}
	return mod;
})(window.pageInitModule || {});
  $(function () {
     $('#menu').metisMenu();
    });