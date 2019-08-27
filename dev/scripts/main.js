$(function(){
    (function () {

        var hamburger = {
            navToggle: document.querySelector('.navToggle'),
            nav: document.querySelector('nav'),

            doToggle: function (e) {
                e.preventDefault();
                this.navToggle.classList.toggle('expanded');
                this.nav.classList.toggle('expanded');
            }
        };

        hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
        $(".header__topbar-nav > ul > li > a").on('click touch', () => {
            if ($('.header__topbar-nav').hasClass('expanded')) {
                $('.header__topbar-nav').toggleClass('expanded')
                $('.navToggle').toggleClass('expanded')
            }
        })
    }());

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    $(".portfolio__container").slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        variableWidth: true,
        adaptiveHeight: true,
        lazyLoad: 'onDemand',
        accessibility: true,
        arrows: true
    });
})