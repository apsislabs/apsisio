'use strict';

(function ($) {
    var $postTitle = $('.post .post__title a');
    $postTitle.hyphenate('en-us');
})(jQuery);
'use strict';

var $postWrapper = $('.post');

$(document).ready(function () {
    $postWrapper.fitVids();
});

$(document).on('oembed.replace', function (e) {
    $postWrapper.fitVids();
});
'use strict';

(function ($) {
    $('a[href^="mailto"]').attr('target', '_blank');
})(jQuery);
'use strict';

(function ($) {
    var $navlink = $('.navbar__nav-link'),
        $navToggle = $('#nav-toggle'),
        $navicon = $('.navicon'),
        $navbar = $('#navbar'),
        $body = $('body');

    var NAVICON_OPEN_CLASS = 'navicon--close';
    var NAVBAR_OPEN_CLASS = 'navbar--open';
    var BODY_OPEN_CLASS = 'nav-open';

    function closeNavbar() {
        $navicon.removeClass(NAVICON_OPEN_CLASS);
        $navbar.removeClass(NAVBAR_OPEN_CLASS);
        $body.removeClass(BODY_OPEN_CLASS);
    }

    function openNavbar() {
        $navicon.addClass(NAVICON_OPEN_CLASS);
        $navbar.addClass(NAVBAR_OPEN_CLASS);
        $body.addClass(BODY_OPEN_CLASS);
    }

    function toggleNavbar() {
        $navicon.toggleClass(NAVICON_OPEN_CLASS);
        $navbar.toggleClass(NAVBAR_OPEN_CLASS);
        $body.toggleClass(BODY_OPEN_CLASS);
    }

    function isNavbarOpen() {
        return $body.hasClass(BODY_OPEN_CLASS);
    }

    $(document).ready(function () {

        // Toggle Navbar on Navicon Click
        $navToggle.click(function (e) {
            e.preventDefault();
            toggleNavbar();
        });

        // Close navbar when clicking on nav link
        $navlink.click(function (e) {
            if (isNavbarOpen()) {
                closeNavbar();
            }
        });

        // Close navbar if transitioning from mobile to desktop
        $(window).resize(function (e) {
            if (isNavbarOpen() && $(window).width() > 960) {
                closeNavbar();
            }
        });
    });
})(jQuery);
'use strict';

(function ($) {
    $('.post').oembed();
})(jQuery);
'use strict';

(function ($) {
    $('.slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 8500,
        adaptiveHeight: true,
        draggable: false,
        cssEase: 'linear'
    });
})(jQuery);
'use strict';

(function ($) {
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
})(jQuery);
'use strict';

(function ($) {
    $(document).ready(function () {
        $('.post__content img').attr('data-action', 'zoom');
    });
})(jQuery);
