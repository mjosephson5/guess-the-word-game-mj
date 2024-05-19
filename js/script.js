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
let word = "magnolia"

//contains all the letters the player guesses
let guessedLetters = [];

//amount of guesses remaining set to ,8, max amount of guesses player can make
let remainingGuesses = 8;

//add an async function called getWord() to retrieve words from API
async function getWord() {
    const res = await fetch(
        "https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt"
    );
 const wordsRetrieved = await res.text()
 //console.log(wordsRetrieved)
 //create an array of words that were retrieved from API
 const wordsRetrievedArray = wordsRetrieved.split("\n");
 //console.log(wordsRetrievedArray);

 //grab random word index from array
 const randomWordIndex = Math.floor(Math.random() * wordsRetrievedArray.length)
 //pull random word from the array and remove whitespace around random word with trim() method -HELP
 const newRandomWord = wordsRetrievedArray[randomWordIndex]
 const newRandomWordTrimmed = newRandomWord.trim()
 //console.log({newRandomTrimmedWord})
 //call placeholder function and pass it the variable holding random trimmed word
 word = newRandomWordTrimmed
console.log(word)
 placeholder(word)
}
//placeholder(word);




//console.log("remaining guesses", remainingGuesses);

//update "word-in-progress" element with circles to represent each letter in word
function placeholder(potatoBox) {
   // console.log("calling placeholder")
    //console.log(guessedWord);
    let emptyStickyNote = " ";
   
  //  console.log({potatoBox})
    for(let potato of potatoBox) {
       // console.log({potato})
       //emptyStickyNote += "●";
       wordInProgress.innerText  += "●"; 
       //console.log(emptyStickNote);
    }
};
getWord()


//add eventListener for guess button and log input/letter to console, then empty value/input
button.addEventListener("click", function(e){
    //prevent default behavior of clicking button and form submitting and reloading page
    e.preventDefault();
    //capture input
    let usersInput = guessLetter.value;
    //console.log(guessLetter.value);
    //empty value of input
    guessLetter.value = "";
    //empty text of message element
    const message = "";
// validate is equal to the return of playersInput
    const validate = playersInput(usersInput);
    //console.log({validate});
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
   //console.log({guessedLetters});
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
        //console.log("Before anything", {letter, guessedList})
        let listItemOfLetters = document.createElement("li");
        //add new list item to unordered list
        //console.log("After creating list item of letters", {letter, guessedList: guessedList.innerHTML, listItemOfLetters:listItemOfLetters.innerHTML})
        listItemOfLetters.innerText = letter;
        //console.log("After updating inner text", {letter, guessedList: guessedList.innerHTML, listItemOfLetters:listItemOfLetters.innerHTML})
        guessedList.append(listItemOfLetters);
        //console.log("After appending list item of letters", {letter, guessedList: guessedList.innerHTML, listItemOfLetters:listItemOfLetters.innerHTML})
       // console.log(listItemOfLetters);
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
    //console.log({newArrayString})
    didPlayerWin();
    
   
};


//Create new function to count the guesses remaining and that will accept the guess input as a parameter
function countGuessesRemaining (guess) {
    //grab the "word" and make it uppercase 
    const uppercaseWord = word.toUpperCase()
    //find out if word contains the "guess"
    if(uppercaseWord.includes(guess)) {
        //let player know the word contains their guess
        message.innerText = `Good guess! The word has the letter ${guess} in it.`
    } else if(!uppercaseWord.includes(guess)) {
        //if guess does not include letter from the word, let the player know and subtract 1 from their remainingGuesses
        message.innerText = `Whoops, the word does not contain the letter ${guess} `
        remainingGuesses = remainingGuesses - 1; 
        span.innerText = ` ${remainingGuesses} guesses `
    } if(remainingGuesses === 1) {
        //If player has one guess, update the span inside the paragraph where the remaining guesses will display to tell player they have one guess
        remainingGuessesElement.innerText = "You have only one guess remaining, make it a good one!"
        message.innerText = `Whoops, the word does not contain the letter ${guess} `}
      else if(remainingGuesses === 0) {
         //if they have no guesses remaining, update message to say game is over and what word is
       message.innerText = `Sorry, the game is over. The word is ${word}.`
    startOver()
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
      startOver();
    }
    
}

function startOver () {
    //hide Guess button
    button.classList.add("hide");
    //hide the paragraph where remaining guesses will display
    remainingGuessesElement.classList.add("hide");
    //hide the unordered list where the guessed letters appear
     guessedList.classList.add("hide");
    //show the Play Again button
    playAgainButton.classList.remove("hide");
}


//add click event to Play Again button
playAgainButton.addEventListener("click", function (){
    //remove the class of "win" applied to the message element
     message.classList.remove("win");
    //empty the message text 
     message.innerText = "";
    //empty unordered list where the guessed letters appear 
     guessedList.innerText = "";
     wordInProgress.innerText = ""
    //set remaining guesses back to 8
    remainingGuesses = 8;
   //set your guessedLetters global variable back to an empty array
    guessedLetters.innerText = []
   //populate the text of the span inside the paragraph where the remaining guesses display with the new amount of guesses (8)
    span.innerText = '8 guesses'
   //show the Guess button
    button.classList.remove("hide");
   //show the paragraph with remaining guesses
    remainingGuessesElement.classList.remove("hide")
   //show the guessed letters
   guessedList.classList.remove("hide")
   //hide "play again" button
   playAgainButton.classList.add("hide")
   //call the getWord() async function so player can play again with new word
   getWord()
})
