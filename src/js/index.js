$(document).ready(function () {
    console.log($('.card-number').text().length);
    $('#name').keyup(function (e) {
        $('.card-name').text($(this).val());
    });
    $('#cvc').keyup(function (e) { 
        $('.cvc-value').text($(this).val());
    });

    $('#expMonth').keyup(function (e) { 
        $('.cvc-value').text($(this).val());
    });
    $('#expYear').keyup(function (e) { 
        $('.cvc-value').text($(this).val());
    });


    $('#cardNumber').keyup(function (e) { 
        $('.card-number').text($(this).val());
    });


});