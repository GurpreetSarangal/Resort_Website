$(document).ready(function() {
    $.validator.addMethod('ge', function(value, element, param) {
        return this.optional(element) || value == $(param).val();
    }, 'Invalid value');

    $.validator.addMethod('le', function(value, element, param) {
        return this.optional(element) || value == $(param).val();
    }, 'Password dont match');


    $('#registration_form').validate({
        rules: {
            first_name: "required",
            last_name: "required",
            mobile : {
                minlength: 10,
            },
            email:{
                required: true,
                email: true,
            },
            confirm_email:{
                required: true,
                email:true,
                ge: "#email"
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 12,
            },
            confirm_password: {
                required: true,
                minlength: 8,
                maxlength: 12,
                le: "#password",
            },
        },
        messages: {
            first_name: "Your First Name is required",
            last_name: "Your Last Name is required",
            
        },
        submitHandler: function(form){
            if($("#output").text() == "Correct!"){
                console.log("ready to be submitted!!");
                form.submit();
                document.location.replace("/html/loginpage.html")
            }
            else{
                $("#output").text("Please Clear the Captcha first");
            }
        }
    });


// document.querySelector() is used to select an element from the document using its ID
let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";

let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#checkButton');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refreshButton');
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];

function newCaptcha(){

    // alphaNums contains the characters with which you want to create the CAPTCHA
    // This loop generates a random string of 7 characters using alphaNums
    // Further this string is displayed as a CAPTCHA
    for (let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    var c = emptyArr.join('');
    ctx.fillText(emptyArr.join(''),captchaText.width/4, captchaText.height/2);
    return c;
}

submitButton.addEventListener("click", function(e){
    console.log(userText.value);
    
    console.log(c);
    if (userText.value === c) {
        output.classList.add("correctCaptcha");
        $("#output").text("Correct!");
        
    } 
    else {
        output.classList.add("incorrectCaptcha");
        $("#output").text("Incorrect, please try again");
        
    }
});

refreshButton.addEventListener('click', function() {
    userText.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
    refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = refreshArr.join('');
    ctx.fillText(refreshArr.join(''),captchaText.width/4, captchaText.height/2);
    output.innerHTML = "";
   });


$("#type").on("change", function(e){
    
    choice = $("#type").val();
    if(choice == 2){
        $(".for-businesses").removeClass("hidden");
    }
    else{
        $(".for-businesses").addClass("hidden");

    }
});

c = newCaptcha();

});