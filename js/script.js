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

//console.log("remaining guesses", remainingGuesses);

//update "words-in-progress" element with circles to represent each letter in word
function placeholder(potatoBox) {
    //console.log(guessedWord);
    let emptyStickyNote = " ";
    for(let potato of potatoBox) {
       //emptyStickyNote += "●";
       wordInProgress.innerText  += "●"; 
       //console.log(potatoStickie);
    }
    
};
placeholder(word);
//placeholder("unicorn");

//add eventListener for guess button and log input/letter to console, then empty value/input
button.addEventListener("click", function(e){
    //prevent default behavior of clicking button and form submitting and reloading page
    e.preventDefault();
    //capture input
    let input = guessLetter.value;
    console.log(guessLetter.value);
    //empty value of input
    guessLetter.value = "";


});