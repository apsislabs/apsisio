(function($) {
    let $navlink   = $('.navbar__nav-link'),
        $navToggle = $('#nav-toggle'),
        $navicon   = $('.navicon'),
        $navbar    = $('#navbar'),
        $body      = $('body');

    const NAVICON_OPEN_CLASS = 'navicon--close';
    const NAVBAR_OPEN_CLASS  = 'navbar--open';
    const BODY_OPEN_CLASS    = 'nav-open';

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

    $(document).ready(() => {

        // Toggle Navbar on Navicon Click
        $navToggle.click((e) => {
            e.preventDefault();
            toggleNavbar();
        });

        // Close navbar when clicking on nav link
        $navlink.click((e) => {
            if ( isNavbarOpen() ) {
                closeNavbar();
            }
        });

        // Close navbar if transitioning from mobile to desktop
        $(window).resize((e) => {
            if ( isNavbarOpen() && $(window).width() > 960) {
                closeNavbar();
            }
        });
    });
}(jQuery));
