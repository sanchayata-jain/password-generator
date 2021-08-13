
var parentDom = document.querySelector("body");
var passwordBox = parentDom.querySelector(".password-box");
//var checkBox = parentDom.querySelector("password-uppercase");

//console.log(parentDom.getElementsByClassName("generate-button"));

parentDom.getElementsByClassName("generate-button")[0].addEventListener("click", () => {
       //passwordBox.innerHTML = "hi";
       //console.log("button has been clicked");
    
    
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
       
       /* --------------------------------------- main --------------------------------------------*/
       
       const password_length = 12;
       var include_uppercase = false;
       var include_number = false;
       var include_special_character = false;

       var checkBoxes = document.querySelectorAll("input[type=checkbox][name= characterTypes]");
       let enabledCheckbox = [];
       checkBoxes.forEach(function(checkbox){
        checkbox.addEventListener("change", function() {
            enabledCheckbox = 
            Array.from(checkBoxes)
            .filter(i => i.checked)
            .map(i => i.value);
            if (enabledCheckbox.includes("capitalLetters")) {
                console.log("Elephants");
            }
            if (enabledCheckbox.includes("numbs")) {
                console.log("Nachos");
            }
            if (enabledCheckbox.includes("specialChars")) {
                console.log("The Vaccines");
            }
        })
    });
       
       var password = "";
       
       for (let i = 0; i < password_length; i++) {
           password = password.concat(generate_character(include_uppercase, include_number, include_special_character));
       }
       
 
    
           console.log(password);
           passwordBox.innerHTML = password;
           
        
    });
//console.log(document.querySelector('#elephants').checked);



