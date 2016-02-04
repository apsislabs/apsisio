let jQuery = jQuery || {};

(function($) {
    $(document).ready(function() {
        $('#nav-toggle').on('click', function(event) {
            event.preventDefault();

            $(this).toggleClass('close');
            $('body').toggleClass('nav-open');
            $('#drawer').toggleClass('drawer--open');
        });
    });
}(jQuery));
