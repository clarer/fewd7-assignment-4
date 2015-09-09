
$('.readmore a').click(function(e) {
    e.preventDefault();
    console.log('I\'m reading more!');
    $('.hide').show('.readless hide');
    $('.show-this-on-click').slideDown('p');
    $('.readmore a').hide('.readmore a');
});

$('.readless a').click(function(e) {
    e.preventDefault();
    console.log('I\'m reading less!');
    $('.hide').hide('.readless hide');
    $('.show-this-on-click').slideUp('p');
    $('.readmore a').show('.readmore a');
});

$('.learnmore a').click(function(e) {
    e.preventDefault();
    console.log('I\'m learning more!');
    //$('.hide').show('.readless hide');
    //$('.readmore a').hide('.readmore a');
});


/*

TO BE USED

$.slideDown()
$.hide()
$.show()
event.preventDefault()
$.ready()

*/