$(document).ready(function () {
    $('.scrollspy').scrollSpy();
});



$(document).ready(function () {
    //Scroll Navigator

    $('#aboutbtn').click(function () {

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top

        }, 1200);

        $('.navbar-collapse').collapse('hide');
    })


    $('#startup').click(function () {

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top

        }, 1200);

        $('.navbar-collapse').collapse('hide');
    })

    $('#website').click(function () {

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top

        }, 1200);

        $('.navbar-collapse').collapse('hide');
    })



});