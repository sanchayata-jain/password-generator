
const select_letter = () => {
    // generating random number from 0 to 25 for selecting letter from undercase and uppercase arrays
    const undercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    const max = undercase.length - 1;
    const min = 0;
    var letter_selector = Math.random() * (max - min) + min; 
    const whole_number_letter_selector = Math.round(letter_selector)

    return undercase[whole_number_letter_selector];
}


const select_number = () => {
    //function should only be entered if flag === 3 in the main
    //generates random number from 0 to 9 for password
    const min = 0;
    const max = 9;
    var number = Math.random() * (max - min) + min;    
    const whole_number = Math.round(number);

    return String(whole_number);
}


const select_special_character = () => {
    const special_symbols = [',', '!', '#', '%', '.', ':', ';', '$', '&', '+', '/', '-', '*', '?', '^'];
    const min = 0;
    const max = special_symbols.length - 1;
    var number = Math.random() * (max - min) + min;    
    const whole_number = Math.round(number);

    return special_symbols[whole_number];
}

const generate_character = (include_uppercase, include_number, include_special_character) => {

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
    }
    
    else if (flag == 1) {
        return select_letter().toUpperCase();
    }
    
    else if (flag == 2) {
        //selects number
        return select_number(); 
    }
    
    else if (flag == 3) {
        //selects special character
        return select_special_character();
    }

}

//main

const password_length = 8;
var include_uppercase = false;
var include_number = false;
var include_special_character = false;

if (document.getElementsByClassName("password-uppercase").checked == true) {
    include_uppercase = true;
}

if (document.getElementsByClassName("password-numbers").checked == true) {
    include_number = true;
}

if (document.getElementsByClassName("password-symbols").checked == true) {
    include_special_character = true;
}

if (document.getElementsByClassName("password-uppercase").unchecked == true) {
    include_uppercase = false;
}

if (document.getElementsByClassName("password-numbers").unchecked == true) {
    include_number = false;
}

if (document.getElementsByClassName("password-symbols").unchecked == true) {
    include_special_character = false;
}



var password = "";

for (let i = 0; i < password_length; i++) {
    password = password.concat(generate_character(include_uppercase, include_number, include_special_character));
    
}

console.log(password);









