$(document).ready(function () {
    $('#name').keyup(function (e) {
        $('.card-name').text($(this).val());
    });
    $('#cvc').keyup(function (e) { 
        $('.cvc-value').text($(this).val());
    });
});

// function isNumber(num) {
//     if (typeof())
// }  aaa