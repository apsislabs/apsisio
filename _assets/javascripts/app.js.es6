let jQuery = jQuery || {};

(function($) {
    $(document).ready(function() {
        $('#nav-toggle').on('click', function(event) {
            event.preventDefault();

            $(this).toggleClass('navicon--close navicon--white');
            $('body').toggleClass('nav-open');
            $('#drawer').toggleClass('drawer--open');
        });
    });
}(jQuery));
