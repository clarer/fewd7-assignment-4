$('.readmore a').click(function(e) {
    e.preventDefault();
    console.log('readmore');
    $('.hide').show('.readless hide');
    $('.readmore a').hide('.readmore a');
});

$('.readless a').click(function(e) {
    e.preventDefault();
    console.log('readless');
    $('.hide').hide('.readless hide');
    $('.readmore a').show('.readmore a');
});

$('.learnmore a').click(function(e) {
    e.preventDefault();
    console.log('learnmore');
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