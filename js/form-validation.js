// Form Validation code is adapted from https://bit.ly/3xXig1Q

function validateEmail(id) {
    let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(!email_regex.test($("#"+id).val())) {
        let div = $("#"+id).closest("div");
        div.removeClass("has-success");
        $("#glypcn"+id).remove();
        div.addClass("has-error has-feedback");
        div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-remove form-control-feedback"></span>');
    return false;
    }

    else {
        let div = $("#"+id).closest("div");
        div.removeClass("has-error");
        $("#glypcn"+id).remove();
        div.addClass("has-success has-feedback");
        div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-ok form-control-feedback"></span>');
    return true;
    }
}

//JQuery
$(document).ready(
    function() {
        $("#contactButton").click(function() {
            if(!validateEmail("emailInput")) {
            return false;
            }
        $("#contactForm").submit();     
        }
        );
    }
);