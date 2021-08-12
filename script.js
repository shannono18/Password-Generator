document.querySelector("#generate").addEventListener("click", writePassword);

    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specialCharacters = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
 
    var confirmLength = "";
    var confirmSpecialCharacters;
    var confirmNumbers;
    var confirmUpperCase;
    var confirmLowerCase;

 function generatePassword() {
    var confirmLength = (prompt("How many characters would you like to use for your password?"));

    while(confirmLength < 8 || confirmLength > 129) {
        alert("Password length must be between 8-128 character. Please try again");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
        } 
    
        alert(`Your password will have ${confirmLength} characters`);

        var confirmSpecialCharacters = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumbers = confirm("Click OK to confirm if you would like to include numbers");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lower case characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include upper case characters");

        while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacters === false && confirmNumbers === false) {
        alert("You must choose at least one parameter");
        
        var confirmSpecialCharacters = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumbers = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
        } 
          
        if (confirmSpecialCharacters) {
          passwordCharacters = passwordCharacters.concat(specialCharacters)
        }
    
        if (confirmNumbers) {
          passwordCharacters = passwordCharacters.concat(numbers)
        }
          
        if (confirmLowerCase) {
          passwordCharacters = passwordCharacters.concat(lowerCase)
        }
    
        if (confirmUpperCase) {
          passwordCharacters = passwordCharacters.concat(upperCase)
        }
    
          console.log(passwordCharacters)

        var randomPassword = ""
      
        for (var i = 0; i < confirmLength; i++) {
          randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
          console.log(randomPassword)
        }
        return randomPassword;
        }
        function writePassword() {
            var password = generatePassword();
            var passwordText = document.querySelector("#password");
          
            passwordText.value = password;
        }