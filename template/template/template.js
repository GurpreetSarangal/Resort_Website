$("#contact-form").validate({
    rules:{
        first_name: "required",
        last_name: "required",
        email:{
            required: true,
            email :true,
        },
        comments: "required",
        phone: {
            required: true,
            minlength: 10,
            maxlength: 10,
        },
    },
    submitHandler: function(form){
        var div = $("#success-message");
        div.text("Your Question is successfuly submitted!!");
        div.removeClass("hidden");
        div.addClass("success");

        $('#contact-form')[0].reset();
    }
})