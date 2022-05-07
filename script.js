// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //The generated password comes out in a certain order each way
  // to ensure security we then mix up all the characters using the below function
  var passArray = password.split("");
  passArray = mixUP(passArray);
  password = passArray.join("");
  // After the characters were randomly chosen then swapped around to make a more secure password we can output to the site.
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//functions
function generatePassword() {
  //Obtain User Input
  var special = 0;
  var nums = 0;
  var upper = 0;
  var pwLength = 0;

  var pwLength = window.prompt("How long should the password be?", "Please choose between 8 - 128")
  while (pwLength > 128 || pwLength < 8){
    pwLength = window.prompt("How long should the password be?", "Invalid, Size must be < 128 and > 8")
  }
  // Obtain if the user would like numbers in the password. As well as how many.
  if (window.confirm ("Would you like to use numbers in the password?")){
    nums = window.prompt("How many characters should be numbers?")
  }
  while (+pwLength < +nums) {
    nums = window.prompt("How many characters should be numbers?", "That is more numbers than you have characters.")
  }
  // Obtain if the user would like special characters and if so how many.
  if (window.confirm("Would you like to use special characters in the password?")){
    special = window.prompt("How many characters should be special?")
  }
  while (+pwLength < (+nums + +special) ){
    special = window.prompt("How many character should be special?", "That is to many special, you don't have that many characters left.")
  }
  // Obtain if the user would like capitol letters and if so how many.
  if (window.confirm("Do you need capitol letters in the password?")){
    upper = window.prompt("How many characters should be capitolized?", "To have all letters be capitolized enter " + (pwLength - nums - special))
  }
  while (+pwLength < (+nums + +special + +upper)){
    upper = window.prompt("How many characters should be capitolized?", "That is to many capitol letters please enter a maximum of " + (pwLength - nums - special))
  }
    
  //Setup the pool of characters to draw from
  var letters = ["a","b","c","d","e","f","g","h","i",'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var specChar = ['!','@','#','$','%','^','&','*','(',')'];
  var pword = "";
  // Loop through generating random characters until the password length has been met.
  for (i = pwLength; i > 0; i--){
    // We will ensure the special characters are added first
    if (special > 0){
      var randSpec = Math.floor(Math.random() * specChar.length)
      special--;
      pword = pword + specChar[randSpec];
    }
    // If all special characters have been added then we can add numbers
    else if (nums > 0){
      var randDigit = Math.floor(Math.random() * 10);
      nums--;
      pword = pword + randDigit;
    }
    // Once all special characters and numbers are resolved we can fill the rest with letters
    else {
      var randLet = Math.floor(Math.random() * letters.length);
        if (upper != 0){
          var capCheck = letters[randLet].toUpperCase(); // some letters will need to be capitolized.
          upper--;
        }
        else {
          capCheck = letters[randLet]; // once we have all needed capitol letters the rest can be lower case.
        }
      pword = pword + capCheck;
    }
  }
return pword;
}
// This might be alot of notes because this took me awhile to get right.
function mixUP(array){
  for(i=0; i < array.length; i++){
    //Generate a random number that we can swap with.
    var randNum = Math.floor(Math.random() * array.length);
    // This picks a random value to overwrite each position.
    var randPos = array[randNum];
    // Used to save the value that is eliminated upon moving.
    var storage ="";
    // We move every single value starting with 0 going to the array length
    var moveThis = array[i]; 
    // We swap every position in the array with a randomly selected other posiiton.
    storage = moveThis;
    array[i] = randPos;
    array[randNum] = storage;
  }
return array;
}

