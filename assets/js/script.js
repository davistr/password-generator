// Assignment code here


var slider = document.getElementById("Range");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

//Create variable for password length
var length = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
    length = slider.value;
}


var upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var low = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var spec = "!@#$%&*";
var pass = "";

const upperDOM = document.getElementById('upper');
const upperChecked = upperDOM.checked;

var generatePassword = function () {

    //var password = " ";
    return length;

    /*for (var i = 0; i <= output; i++) {

        if (upperChecked) {
            password = 456789999999;
            return password;
        }
        else if (document.getElementById("lower").checked) {
            pass += low.charAt(Math.floor(Math.random() * low.length));
            document.getElementById("password").value = pass;
            return pass;
        }
        else if (document.getElementById("numbers").checked) {
            pass += num.charAt(Math.floor(Math.random() * num.length));
            document.getElementById("password").value = pass;
            return pass;
        }
        else if (document.getElementById("special").checked) {
            pass += spec.charAt(Math.floor(Math.random() * spec.length));
            document.getElementById("password").value = pass;
            return pass;
        }
        else {
            window.alert("Please select at least 1 password requirement!");
        }
    }*/
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


