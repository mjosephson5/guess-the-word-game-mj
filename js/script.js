//unordered list where the player's guessed letter will appear
const guessedList = document.querySelector(".guessed-letters");
//button with text "Guess"
const button = document.querySelector(".guess");
//text input where player will guess letter - ask Michael
const guessLetter = document.querySelector(".letter");
//empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress")
//empty paragraph where the remaining guesses will display
const remainingGuesses = document.querySelector(".remaining")
//span inside the paragraph where remaining guesses will display
const span = document.querySelector(".remaining span");
//empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");
//the hidden button that will appear when prompting player to play again
const playAgainButton = document.querySelector(".play-again");

//starting word, "magnolia"
const word = "magnolia"

//contains all the letters the player guesses
const guessedLetters = [];

//console.log("remaining guesses", remainingGuesses);

//update "words-in-progress" element with circles to represent each letter in word
function placeholder(potatoBox) {
    //console.log(guessedWord);
    let emptyStickyNote = " ";
    for(let potato of potatoBox) {
       //emptyStickyNote += "●";
       wordInProgress.innerText  += "●"; 
       //console.log(emptyStickNote);
    }
    
};
placeholder(word);
//placeholder("unicorn");

//add eventListener for guess button and log input/letter to console, then empty value/input
button.addEventListener("click", function(e){
    //prevent default behavior of clicking button and form submitting and reloading page
    e.preventDefault();
    //capture input
    let usersInput = guessLetter.value;
    console.log(guessLetter.value);
    //empty value of input
    guessLetter.value = "";
    //empty text of message element
    const message = "";
// validate is equal to the return of playersInput
    const validate = playersInput(usersInput);
    console.log({validate});
    if(validate) {
        makeGuess(usersInput)
    }
});

//Create function to check player's input and return input if it's a single alpha character
function playersInput (inputToFunction) {
//regular expression to check that input is only a letter
const acceptedLetter = /[a-zA-Z]/
//check for different scenarios - originally I put "guessLetter" instead of "input"
if(inputToFunction === "") {
    message.innerText = "Please enter a letter";
} else if(inputToFunction.length > 1 ) {
    message.innerText = "Please only enter one letter at a time";
    //this scenario is not working below
} else if(!inputToFunction.match(acceptedLetter)) {
    message.innerText ="Letters only, please.";
} else {
    //spit out this value
    return inputToFunction
}
};

//Create a function to capture input to make sure letter's havent been guessed
function makeGuess (letter) {
    //convert letter parameter to uppercase
    const uppercaseLetter = letter.toUpperCase()
    //does array already contain the letter being guessed
    if(guessedLetters.includes(uppercaseLetter)) {
        message.innerText = "You already guessed that letter, try a different letter."
    } else {
        guessedLetters.push(uppercaseLetter)
    };
   console.log({guessedLetters});
}



//
// write a frunction that returns the first letter of a string

// build function that takes oen string argument
function firstLetter(word) {
    // select first letter from string save to variable
    // if (typeof word === 'string') {
    //   const arrayOfStringLetters = word.split('');
    //   return arrayOfStringLetters[0];
    // } else {
    //   return 'YOU ARE A DUMB BITCH';
    // }
    return word[0];
    // return variable
  }
  
  // input could be null, undefined, number, object, array, etc. (input wrong type)
  const validate = (testResult, expectedResult) => {
    if (testResult === expectedResult) {
      return 'success!';
    } else {
      return `invalid result. Expected ${expectedResult} but received ${testResult}`;
    }
  };
  
  // 'cat' -> 'c'
  const test1 = firstLetter('cat');
  const expect1 = 'c';
  // 'Cat' -> 'C'
  const test2 = firstLetter('Cat');
  const expect2 = 'C';
  // // 2 -> return 'invalid input'
  // const test3 = firstLetter(2);
  // const expect3 = 'YOU ARE A DUMB BITCH';
  // // [1,2,3] -> return 'invalid input'
  // const test4 = firstLetter([1, 2, 3]);
  // const expect4 = 'YOU ARE A DUMB BITCH';
  
  console.log(validate(test1, expect1));
  console.log(validate(test2, expect2));
  // console.log(validate(test3, expect3));
  // console.log(validate(test4, expect4));
  