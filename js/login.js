user = "customer";
pass = "password";

$.validator.addMethod('ge', function(value, element, param) {
    return this.optional(element) || value == user;
}, 'Invalid username');

$.validator.addMethod('le', function(value, element, param) {
    return this.optional(element) || value == pass;
}, 'Invalid password');

$("#login-form").validate({
    rules:{
        username: {
            required: true,
            ge: "#username",
        },
        password: {
            required: true,
            le: "password",
        }
    },
    submitHandler: function(form){
        window.location.replace("home.html");
    }
});
