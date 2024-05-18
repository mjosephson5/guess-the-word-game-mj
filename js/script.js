//unordered list where the player's guessed letter will appear
const guessedList = document.querySelector(".guessed-letters");
//button with text "Guess"
const button = document.querySelector(".guess");
//text input where player will guess letter 
const guessLetter = document.querySelector(".letter");
//empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress")
//empty paragraph where the remaining guesses will display
const remainingGuessesElement = document.querySelector(".remaining")
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

//amount of guesses remaining set to ,8, max amount of guesses player can make
let remainingGuesses = 8;

//console.log("remaining guesses", remainingGuesses);

//update "word-in-progress" element with circles to represent each letter in word
function placeholder(potatoBox) {
    console.log("calling placeholder")
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
//check for different scenarios
if(inputToFunction === "") {
    message.innerText = "Please enter a letter";
} else if(inputToFunction.length > 1 ) {
    message.innerText = "Please only enter one letter at a time";
} else if(!inputToFunction.match(acceptedLetter)) {
    message.innerText ="Letters only, please.";
} else {
    //spit out this value
    return inputToFunction
}
};

//Create a function to capture input to make sure letters havent been guessed
function makeGuess (letter) {
    //convert letter guess parameter to uppercase on screen
    const uppercaseLetter = letter.toUpperCase()
    //does array already contain the letter being guessed
    if(guessedLetters.includes(uppercaseLetter)) {
        message.innerText = "You already guessed that letter, try a different letter."
    } else {
        guessedLetters.push(uppercaseLetter)
        showGuessedLetters();
        countGuessesRemaining(uppercaseLetter);
        updateWordInProgress(guessedLetters);
    };
   console.log({guessedLetters});
}



// write a frunction that returns the first letter of a string

// build function that takes one string argument
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
  
//Create a function to update the page to show the guessed letters
function showGuessedLetters () {
    //empty innerHTML of the ul where player's guessed letters will display
    guessedList.innerHTML = "";
    //create a new list item for each letter inside guessedLetters array
    guessedLetters.forEach(function(letter,index){
        console.log("Before anything", {letter, guessedList})
        let listItemOfLetters = document.createElement("li");
        //add new list item to unordered list
        console.log("After creating list item of letters", {letter, guessedList: guessedList.innerHTML, listItemOfLetters:listItemOfLetters.innerHTML})
        listItemOfLetters.innerText = letter;
        console.log("After updating inner text", {letter, guessedList: guessedList.innerHTML, listItemOfLetters:listItemOfLetters.innerHTML})
        guessedList.append(listItemOfLetters);
        console.log("After appending list item of letters", {letter, guessedList: guessedList.innerHTML, listItemOfLetters:listItemOfLetters.innerHTML})
        console.log(listItemOfLetters);
    }) 
};

//Create a function to update the word in progress - swap out circle symbols for correctly guessed letters
function updateWordInProgress (guessedLetters) {
    //change the word variable to uppercase - didn't we do that on line 80?
    const wordUpper = word.toUpperCase();
    //split the word string into an array so that the letter can appear in guessedLetters array
    const wordArray = wordUpper.split("");
    //check if wordArray contains any letters from guessedLetters array
    //Iterate over guessedLetters arraY
    const newArray = [];
    //create new string of correct characters and circles where character hasn't been guessed
    for(let correctLetter of wordArray){
      //Compare each letter of guessedLetters array to each letter of wordArray
      if(guessedLetters.includes(correctLetter)){
       //if it includes letter swap out circle symbol for letter
       newArray.push(correctLetter)

      } else {
        newArray.push("●");
      }
      //console.log(newArray)
    }
    //print to window
    const newArrayString = newArray.join("");
    wordInProgress.innerText = newArrayString
    console.log({newArrayString})
    didPlayerWin();
   
};

//Create a function to count guesses remaining
function countGuessesRemaining (guess) {
    //grab the "word" and make it uppercase - didn't we do this in line 141?
    const uppercaseWord = word.toUpperCase()
    //find out if word contains the "guess"
    if(uppercaseWord.includes(guess)) {
        //let player know the word contains their guess
        message.innerText = `Good guess! The word has the letter ${guess} in it.`
    } else if(!uppercaseWord.includes(guess)) {
       //if guess does not include letter from the word, let the player know and subtract 1 from their remainingGuesses
        message.innerText = `Whoops, the word does not contain the letter ${guess} `
        remainingGuesses -= 1; 
    }
}

//Create a function to check if the player won
function didPlayerWin () {
    //does word in progress match the word they should guess
    if(wordInProgress.innerText === word.toUpperCase()) {
      //player has won, add the "win" class to the empty paragraph where messages appear when they guess a letter
      message.classList.add("win");
      //update paragraph's contents
      message.innerHTML = "<p class='highlight'>You guessed correct the word! Congrats!</p>";
    }
}







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
  