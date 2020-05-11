(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });

    getMyExperience();


    function getMyExperience() {
        var startDate = new Date(2014, 6, 7);
        var currentDate = new Date();
        var diff_date = currentDate - startDate;

        var num_years = Math.floor(diff_date / 31536000000);
        var num_months = Math.floor((diff_date % 31536000000) / 2628000000);
        // var num_days = Math.floor(((diff_date % 31536000000) % 2628000000)/86400000);

        var expStr = '';
        expStr += num_years + ' years';
        expStr += num_months > 0 ? ' and ' + num_months + ' months' : '';
        document.getElementById('total-experience').innerHTML = expStr
    }

})(jQuery); // End of use strict