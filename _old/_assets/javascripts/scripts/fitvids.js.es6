let $postWrapper = $('.post');

$(document).ready(function() {
    $postWrapper.fitVids();
});

$(document).on('oembed.replace', (e) => {
    $postWrapper.fitVids();
});
