// Assignment Code

// Function to generate a random password
//Instruction 1
  function generatePassword() {
  // Prompt for password length
  var length = parseInt(prompt("Enter password length (between 8 and 128):"));

  // Validate length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length.");
    return;
  }

  // Prompt for character types
  //consfirms return a boolean value
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  // ! means false or "is not", && means "and", ||| means "or", == approximate equality, === absolute equality (value AND datatype)
  //in conditionals, if ALL conditions are met, statement becomes "truthy" and code inside runs
  if (includeLowercase === false && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }

  // Define character sets based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=";

  // Combine character sets based on selected criteria
  //connects to boolean value on line 16-19 for line 39-43
  var allChars = "";

  if (includeLowercase === true) allChars = allChars + lowercaseChars;

  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecial) allChars += specialChars;

  // Generate the password
  // for loop for(where to start; how many times or how far to go; in what increments)
  var password = "";
 var textarea=document.getElementById("password")
  for (var i = 0; i < length; i++) {
//an index is the character's address in an array
    var randomIndex = Math.floor(Math.random() * allChars.length);//9
//convert index to true character value and add to password variable
    password = password + allChars.charAt(randomIndex);
    console.log(password)
  }
//console.log(password)
  // Display the password
 // alert("Your generated password is:\n" + password);
return textarea.value = password
}


// Call the function when the page is loaded
var generateButton=document.getElementById("generate")
generateButton.addEventListener("click",generatePassword);