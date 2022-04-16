$(document).ready(function() {
    $('#registration_form').validate({
        rules: {
            first_name: "required",
            last_name: "required",

        },
        messages: {
            first_name: "Your First Name is required",
            last_name: "Your Last Name is required",
            
        },
        submitHandler: function(form){
            form.submit();
        }
    });
});