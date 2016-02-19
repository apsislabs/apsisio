let jQuery = jQuery || {};

(function($) {
    $(document).ready(function() {
        $('#nav-toggle').on('click', function(event) {
            event.preventDefault();

            $('.navicon').toggleClass('navicon--close');
            $('#header').toggleClass('navbar--open');

            $('body').toggleClass('nav-open');
        });
    });
}(jQuery));
