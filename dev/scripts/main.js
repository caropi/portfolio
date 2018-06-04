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

    }());

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
})