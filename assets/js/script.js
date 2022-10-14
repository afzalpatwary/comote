/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here
    $(function () {
        $('#seo-score-illustration').addClass('active');
        setInterval(function () {
            $('#seo-score-illustration').toggleClass('active');
        }, 3000)
    });

});




/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // animation  start
    // when trigged specific section
    $(function () {
        $(window).on('scroll', function () {
            let scrollTop = $(this).scrollTop();
            function elDetect(el) {
                if ($(el).length) {
                    let elemOffsetTop = el.offset().top
                    let elemHeight = el.outerHeight();
                    let windowHeight = $(window).outerHeight();
                    if (scrollTop >= (elemOffsetTop - (windowHeight / 2))) {
                        setTimeout(function () {
                            el.find('.svg').addClass('active');
                        }, 100);
                    }
                }
            }
            elDetect($('.working-process'));
        });
    });


    // counterUp init
    $(function () {
        if ($('.counter-up').length) {
            $('.counter-up').counterUp({
                delay: 10,
                time: 2000,
            });
        }
    });


    // custom accordion
    // FAQ
    $(function () {
        if ($('.faq-list').length) {
            $('.faq-list').on('click', '.faq-title', function (e) {
                e.preventDefault();
                // remove siblings activities
                $(this).closest('.faq-list-item').siblings().removeClass('open').find('.faq-desc').slideUp();
                $(this).closest('.faq-list-item').siblings().find('.ni').addClass('ni-plus').removeClass('ni-minus');

                // add slideToggle into this
                $(this).closest('.faq-list-item').toggleClass('open').find('.faq-desc').slideToggle();
                $(this).find('.ni').toggleClass('ni-plus ni-minus');
            });
        }
    });


    // testimonial-carousel init
    // article carousel
    $(function () {
        if ($('#testimonial-carousel').length) {
            $("#testimonial-carousel").owlCarousel({
                items: 3,
                margin: 30,
                nav: $(window).width() > 1200 ? true : false,
                loop: true,
                autoplay: true,
                dots: false,
                autoplayHoverPause: true,
                navText: ['<span class="ni ni-arrow-left"></span>', '<span class="ni ni-arrow-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
        if ($('#team-carousel').length) {
            $("#team-carousel").owlCarousel({
                items: 4,
                margin: 30,
                nav: $(window).width() > 1200 ? true : false,
                loop: true,
                autoplay: true,
                dots: false,
                autoplayHoverPause: true,
                navText: ['<span class="ni ni-arrow-left"></span>', '<span class="ni ni-arrow-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        }
        if ($('#article-carousel').length) {
            $("#article-carousel").owlCarousel({
                items: 3,
                margin: 30,
                nav: $(window).width() > 1200 ? true : false,
                loop: true,
                autoplay: true,
                dots: false,
                autoplayHoverPause: true,
                navText: ['<span class="ni ni-arrow-left"></span>', '<span class="ni ni-arrow-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
        if ($('#agency-carousel').length) {
            $("#agency-carousel").owlCarousel({
                items: 6,
                margin: 40,
                nav: false,
                loop: true,
                autoplay: true,
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    576: {
                        items: 3
                    },
                    1024: {
                        items: 4
                    },
                    1200: {
                        items: 6
                    }
                }
            });
        }
    });


});
