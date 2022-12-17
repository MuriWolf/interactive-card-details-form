$(document).ready(function () {
    $('#cardNumber').keyup(function() {
        $(this).val($(this).val().replace(/(\d{4})(\d+)/g, '$1 $2'));
        $('.card-number').text($(this).val());
        checkError('#cardNumber', 16);
    });
    bindData("#name", ".card-name", 0);
    bindData("#cvc", ".cvc-value", 3);
    bindData("#expMonth", ".card-exp-date--month", 2);
    bindData("#expYear", ".card-exp-date--year", 2);

    $("#submitBtn").click(function (e) { 
        e.preventDefault();
        isError = false;
        $.each($("form input"), function (i, value) {
            if (checkError(`#${value.id}`, value.maxLength)) {
                isError = true; 
            } 
        });
        if (isError === false) {
            $(".card-details__form").hide()
            $("#card-complete").removeClass("d-none");
        }
    });
});

$.fn.isValid = function(){
    return this[0].checkValidity();
}

function checkError(el, size) { 
    $(el).siblings("span").empty();
    let errorMessage = "";
    let error = false
    if(el === '#expMonth') {
        if(Number($(el).val()) > 12 || Number($(el).val()) < 1) {
            error = true;
            errorMessage = errorMessage + 'month range (01-12)';
            toggleError(el, error, errorMessage);
            return;
        }
     } 
    if(!$(el).isValid()) {
        error = true
        if ($(el).val().length === 0) {
            errorMessage = "Can't be empty";
        } else {
            if($(el).val().replace(/\s+/g, '').length < size || !$(el).isValid()) {
                errorMessage = errorMessage + size ==  0 ? `wrong format` : `${size} caracteres expected or wrong format `;
            } 
        }
    }
    toggleError(el, error, errorMessage)
    return error
}

function toggleError(el, error, errorMessage) {
    if(error) {
        $(el).addClass("error");
        $(el).after(`<span class='error-message'>${errorMessage}</span>`);
    } else {
        $(el).siblings("span").empty();
        $(el).removeClass("error");
    }
}

function bindData(inputEL, outputEl, size) {
    $(inputEL).on({
        keyup: function () { 
            checkError(inputEL, size);
            $(outputEl).text($(this).val());
        }
    })
}