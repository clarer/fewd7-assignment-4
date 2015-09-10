$(document).ready(function() {


    $('.readmore a').click(function(e) {
        e.preventDefault();
        console.log('I\'m reading more!');
        $('.readmore').hide();
        $('#show-this-on-click').slideDown('slow');
        $('.hide').show('.readless hide');
    });

    $('.readless a').click(function(e) {
        e.preventDefault();
        console.log('I\'m reading less!');
        $('.readmore').show();
        $('#show-this-on-click').slideUp('slow');
        $('.hide').hide('.readless hide');
    });

    $('a.learnmore').click(function(e) {
        e.preventDefault();
        console.log('I\'m learning more!');
        $('span.hide').slideDown();
        $('.learnmore').hide();
    });

});

/*

TO BE USED

$.slideDown()
$.hide()
$.show()
event.preventDefault()
$.ready()

*/