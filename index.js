
window.addEventListener('load', generate_password);
var parentDom = document.querySelector("body");

class PasswordGenerator {
    constructor() {
        var include_uppercase = false; 
        var include_number = false;
        var include_special_character = false; 
        var password_length = 8;  // default password length is 8 characters long
    }
}


var passwordGenerator = new PasswordGenerator();

var scrollBox = document.querySelector(".scroll-box");
var slider = document.getElementsByClassName("slider-range")[0];


slider.oninput = function() {
    scrollBox.innerHTML = this.value;
    generate_password();
}

var passwordBox = parentDom.querySelector(".password-box");
parentDom.getElementsByClassName("generate-button")[0].addEventListener("click", generate_password);


function generate_password() { 
    passwordGenerator.password_length = slider.value;
    scrollBox.innerHTML = slider.value;

    var password = "";

    for (let i = 0; i < passwordGenerator.password_length; i++) {
        password = password.concat(generate_character(passwordGenerator.include_uppercase,
                                                      passwordGenerator.include_number,
                                                      passwordGenerator.include_special_character));
    }
    
    passwordBox.innerHTML = password;
}


function random_number_generator(max, min) {
    var random_number = Math.random() * (max - min) + min;    
    const random_whole_number = Math.round(random_number);

    return random_whole_number;
}

function select_letter() {
    // generating random number from 0 to 25 for selecting letter from undercase and uppercase arrays
    const undercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

    const max = undercase.length - 1;
    const min = 0;
    const whole_number_letter_selector = random_number_generator(max, min);
    
    return undercase[whole_number_letter_selector];
}


function select_number() {
    //function should only be entered if flag === 3 in the main
    //generates random number from 0 to 9 for password
    const max = 9;
    const min = 0;
    const whole_number = random_number_generator(max, min);

    return String(whole_number);
}


function select_special_character() {
    const special_symbols = [',', '!', '#', '%', '.', ':', ';', '$',
                             '&', '+', '/', '-', '*', '?', '^'];

    const max = special_symbols.length - 1;
    const min = 0;
    const whole_number = random_number_generator(max, min);

    return special_symbols[whole_number];
}

function generate_character(include_uppercase, include_number, include_special_character) {

    if (!include_uppercase && !include_number && !include_special_character) {
        return select_letter();
    }

    var selector_array = [0];    

    if (include_uppercase) {
        selector_array.push(1);
    }
    
    if (include_number) {
        selector_array.push(2);
    }
    
    if (include_special_character) {
        selector_array.push(3);
    }

    const min = 0;
    const max = selector_array.length - 1;
    var number = Math.random() * (max - min) + min;    
    const flag = selector_array[Math.round(number)];
    
    if (flag == 0) {
        return select_letter();
    } else if (flag == 1) {
        return select_letter().toUpperCase();
    } else if (flag == 2) {
        //selects number
        return select_number(); 
    } else if (flag == 3) {
        //selects special character
        return select_special_character();
    }

}


var checkBoxes = document.querySelectorAll("input[type=checkbox][name= characterTypes]");
let enabledCheckbox = [];

checkBoxes.forEach(function(checkbox){
    checkbox.addEventListener("change", function() {
        enabledCheckbox = Array.from(checkBoxes).filter(i => i.checked).map(i => i.value);

        if (enabledCheckbox.includes("capitalLetters")) {
            console.log("Capital Letters");
            passwordGenerator.include_uppercase = true;
        } else {
            passwordGenerator.include_uppercase = false;
        }
        if (enabledCheckbox.includes("numbs")) {
            console.log("Numbers");
            passwordGenerator.include_number = true;
        } else {
            passwordGenerator.include_number = false;
        }
        if (enabledCheckbox.includes("specialChars")) {
            console.log("Special Characters");
            passwordGenerator.include_special_character = true;
        } else {
            passwordGenerator.include_special_character = false;
        }
    })
});



