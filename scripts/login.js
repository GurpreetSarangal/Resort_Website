user = "customer";
pass = "password";


$("#login-form").validate({
    rules:{
        username: {
            required: true,
        },
        password: {
            required: true,
        }
    },
    submitHandler: function(form){
        console.log("this runs")
        if(validCredentials()){ 
            window.location.replace("/index.html");
            console.log("true")
        }
        else{
            console.log("false")
            warn_user()
        }
    }
});

function validCredentials(){
    var in_user = $("#username").val();
    var in_pass = $("#password").val();
    if( in_user == user && in_pass == pass){
        return true;
    }
    else{
        return false;
    }
}

function warn_user(){
    var in_user = $("#username").val();
    var in_pass = $("#password").val();
    if (in_user != user){
        $("#username").addClass("error");
    }

    if(in_pass != pass){
        $("#password").val("");
        $("#password").addClass("error");
    }
}