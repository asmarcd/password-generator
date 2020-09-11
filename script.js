// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// TODO: Create the generatePassword() function - this is responsible for taking all the elements collected by the writePassword function and actually appending it to the page. all code needs to live inside this function.

// TODO: Create prompts to ask questions of user in order to write password. 

// TODO: prompt asking for length of 8-128 characters and save it to a variable.

// TODO: confirm popup asking if user wants to  include: lower case

// TODO: confirm popup asking if user wants to  include: upper case

// TODO: confirm popup asking if user wants to  include: numeric

// TODO: confirm popup asking if user wants to  include: special characters

// TODO: after prompts and validations are done, create the password

// TODO: create an array for each needed charater set. "abcde...".split will create an array of the whole alphabet. Doublecheck exactly how to do that.

// TODO: Create a conditional situation that saves the chosen characters from the confirms to a new array.

// TODO: create a new variable that holds all the chosen characters from that final array.

// TODO: select the number of randomly chosen characters from that final variable that will make up the password.
// you can use Math.floor(Math.random()) to get a random number. You can then loop it the number of times chosen by the user by setting a variable for that and using it in your second place in your for loop.

// TODO: add validations to make sure at least 1 type of character is selected

// TODO: add validation that length is at least 8 and no more than 128 characters

// NOTE: You shouldn't need to create an object to complete this homework. Save the confirms to variables. choose number of characters, then for each character, you add each of those arrays to your final array, and then choose characteres from within the final array by way of it's associated variable. Only include those arrays if they choose to include them from the prompt. You're building one big final array.





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
