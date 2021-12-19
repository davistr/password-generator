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

// create string variable for potential requirement subsets
var upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var low = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var spec = "!@#$%&*";
// variables for multiple selections
var uppLow = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var uppNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var uppSpec = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*";
var lowNum = "abcdefghijklmnopqrstuvwxyz0123456789";
var lowSpec = "abcdefghijklmnopqrstuvwxyz!@#$%&*";
var numSpec = "0123456789!@#$%&*";
var uppLowNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
var uppLowSpec = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*abcdefghijklmnopqrstuvwxyz";
var uppNumSpec = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
var lowNumSpec = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
var all = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&abcdefghijklmnopqrstuvwxyz0123456789";
// Create variables to capture checkbox elements
var check1 = document.getElementById("upper");
var check2 = document.getElementById("lower");
var check3 = document.getElementById("numbers");
var check4 = document.getElementById("special");

var generatePassword = function () {

    // Create conditional statement to check possible combinations
    if (check1.checked && check2.checked && check3.checked && check4.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += all.charAt(Math.floor(Math.random() * all.length));
        }
        return password;
    }
    else if (check1.checked && check2.checked && check3.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += uppLowNum.charAt(Math.floor(Math.random() * uppLowNum.length));
        }
        return password;
    }
    else if (check1.checked && check2.checked && check4.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += uppLowSpec.charAt(Math.floor(Math.random() * uppLowSpec.length));
        }
        return password;
    }
    else if (check1.checked && check3.checked && check4.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += uppNumSpec.charAt(Math.floor(Math.random() * uppNumSpec.length));
        }
        return password;
    }
    else if (check2.checked && check3.checked && check4.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += lowNumSpec.charAt(Math.floor(Math.random() * lowNumSpec.length));
        }
        return password;
    }
    else if (check1.checked && check2.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += uppLow.charAt(Math.floor(Math.random() * uppLow.length));
        }
        return password;
    }
    else if (check1.checked && check3.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += uppNum.charAt(Math.floor(Math.random() * uppNum.length));
        }
        return password;
    }
    else if (check1.checked && check4.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += uppSpec.charAt(Math.floor(Math.random() * uppSpec.length));
        }
        return password;
    }
    else if (check2.checked && check3.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += lowNum.charAt(Math.floor(Math.random() * lowNum.length));
        }
        return password;
    }
    else if (check2.checked && check4.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += lowSpec.charAt(Math.floor(Math.random() * lowSpec.length));
        }
        return password;
    }
    else if (check3.checked && check4.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += numSpec.charAt(Math.floor(Math.random() * numSpec.length));
        }
        return password;
    }
    else if (check1.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += upp.charAt(Math.floor(Math.random() * upp.length));
        }
        return password;

    }
    else if (check2.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += low.charAt(Math.floor(Math.random() * low.length));
        }
        return password;
    }
    else if (check3.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += num.charAt(Math.floor(Math.random() * num.length));
        }
        return password;
    }
    else if (check4.checked) {

        password = "";
        for (var i = 0; i < length; i++) {
            password += spec.charAt(Math.floor(Math.random() * spec.length));
        }
        return password;
    }
    else {
        password = "";
        window.alert("Please select at least 1 password requirement!");
        return password;
    }
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
