import { fetchQuote, quotes } from './modules/quotes.js';
import {
  saveHighScore,
  displayHighScores,
  clearHighScores,
} from './modules/highscore.js';

// Initialize variables to store the list of words and track the player's position
let words = [];
let wordIndex = 0;
let startTime = Date.now();
let timerInterval;

// Page elements
const quotesDiv = document.querySelector('.quotes');
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const promptStart = document.getElementById('prompt_start');
const promptAgain = document.getElementById('prompt_again');
const startButton = document.getElementById('start');
const timerElement = document.getElementById('timer');
const welcome = document.getElementById('welcome');
const resetBtn = document.getElementById('reset');
const resetDiv = document.getElementById('reset-div');
const formShow = document.getElementsByClassName('form');

// Hide page elements
const hidePrompt_Button = () => {
  promptAgain.classList.add('none');
  promptStart.className = 'none';
  startButton.style.visibility = 'hidden';
  welcome.style.display = 'none';
  resetDiv.style.display = 'none';
};

// Show page elements
const showPrompt_Button = () => {
  promptAgain.classList.remove('none');
  startButton.style.visibility = 'visible';
  resetDiv.style.display = 'inline-block';
};

const showForm = () => {
  formShow[0].style.display = 'flex';
};

const hideForm = () => {
  formShow[0].style.display = 'none';
};

const showTimer = () => {
  //Show Timer element when start button is clicked
  timerElement.classList.remove('none');
  timerElement.style.display = 'inline-block';

  //Reset Timer
  timerElement.innerText = '0';
};

const startTimer = () => {
  startTime = new Date().getTime();
  const interval = () => {
    const elapsedTime = ((new Date().getTime() - startTime) / 1000).toFixed(0);
    timerElement.innerText = `${elapsedTime}`;
  };
  timerInterval = setInterval(interval, 1000); // Update timer every 1000ms/1s for smooth display
};

const stopTimer = () => {
  clearInterval(timerInterval);
};

// Input field disabled by default
typedValueElement.disabled = true;

// Disable autocomplete and add a placeholder
typedValueElement.setAttribute('autocomplete', 'off');

//Disable default behaviour for key Enter
typedValueElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the page from refreshing when enter key is pressed
  }
});

// Timer element
let isTimerStarted = false;

// Event listener for the reset button
resetBtn.addEventListener('click', () => {
  // Prompt the user to confirm the action
  const userConfirmed = confirm(
    'Are you sure you want to reset all high scores? This action cannot be undone.'
  );

  if (userConfirmed) {
    // Clear high scores if the user confirms
    clearHighScores();

    // Provide feedback to the user by updating the high scores display
    alert('High scores have been successfully reset.');
  }
});

// Event listener for the start button
startButton.addEventListener('click', async () => {
  // Timeout logic: promise quote fetch within a stipulated time frame eg. 1350ms/1.35s
  const fetchQuoteWithTimeout = async () => {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), 1350)
    );

    try {
      const quoteData = await Promise.race([fetchQuote(), timeout]);
      if (quoteData) {
        console.log('Quote fetched successfully');
        return quoteData.content;
      } else {
        return null;
      }
    } catch (error) {
      return null; // Handle errors by returning null, if the API call fails or times out
    }
  };

  let quote = await fetchQuoteWithTimeout();

  if (!quote) {
    // If the API call fails or times out, select a random quote from the base quotes array
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    quote = quotes[quoteIndex];
  }

  // Hide resetDiv before starting the game
  resetDiv.style.display = 'none';

  // Split the quote into words
  words = quote.split(' ');

  // Reset the word index for tracking
  wordIndex = 0;

  /* Update the UI
    Create an array of span elements for each word */
  const spanWords = words.map((word) => `<span> ${word} </span>`);

  //Display Timer
  showTimer();

  hidePrompt_Button();

  showForm();

  // Push the .main element up
  quotesDiv.classList.add('active');

  // Convert the array into a string and set as innerHTML on quoteElement
  quoteElement.innerHTML = spanWords.join('');

  //transform quote text by adding text formatting class
  quoteElement.classList.add('quote');

  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';

  // Clear any prior messages
  messageElement.innerText = '';

  // Reset the timer flag
  isTimerStarted = false;

  // Setup the textbox
  typedValueElement.value = '';

  //Enable input field
  typedValueElement.disabled = false;

  // Focus on the textbox
  typedValueElement.focus();
});

// Initialize an error flag
let errorFlag = false;

typedValueElement.addEventListener('input', () => {
  // Start the timer on the player's first input
  if (!isTimerStarted) {
    startTimer();
    isTimerStarted = true;
  }

  // Get the current input values and word states
  const typedValue = typedValueElement.value; // User's typed input
  const currentWord = words[wordIndex]; // Current word to match
  const typedWords = typedValue.trim().split(' '); // Words typed so far
  const currentTypedWord = typedWords[typedWords.length - 1] || ''; // Last word being typed

  // Validate the current word and update error state accordingly
  if (validateTypedWord(typedValue, currentWord, currentTypedWord)) {
    typedValueElement.className = ''; // Clear error styling if correct
    errorFlag = false;

    // If typed word fully matches the current word
    if (currentTypedWord === currentWord) {
      // Check if this is the last word in the quote
      if (wordIndex === words.length - 1) {
        endGame(); // End game if it's the last word
      } else if (typedValue.endsWith(' ')) {
        // If spacebar is pressed after typing the word, move to the next word
        advanceToNextWord();
      }
    }
  } else {
    // Set error styling and flag if there's an input mismatch
    typedValueElement.className = 'error';
    errorFlag = true;
  }
});

/**
 * Validates the current word input to ensure it matches the intended word.
 * @param {string} typedValue - The full input typed by the player so far.
 * @param {string} currentWord - The word the player should be typing.
 * @param {string} currentTypedWord - The player's currently typed word.
 * @returns {boolean} - Returns true if typed input is valid, false if there’s an error.
 */
function validateTypedWord(typedValue, currentWord, currentTypedWord) {
  // Check if the player pressed space prematurely, flag as error if true
  if (typedValue.endsWith(' ') && currentTypedWord !== currentWord) {
    return false;
  }

  // Check if the current typed word is longer than the correct word, flag as error if true
  if (typedValue.length < currentTypedWord.length) {
    return false;
  }

  // Otherwise, check if the current word starts with the player's input
  return currentWord.startsWith(currentTypedWord);
}

/**
 * Highlights the current word the player is on in the displayed quote.
 */
function highlightCurrentWord() {
  // Clear all previous highlights
  for (const wordElement of quoteElement.children) {
    wordElement.className = '';
  }

  // Highlight the current word
  quoteElement.children[wordIndex].className = 'highlight';
}

/**
 * Ends the game, stops the timer, and displays results with high scores.
 */
function endGame() {
  stopTimer();
  const elapsedTime = ((new Date().getTime() - startTime) / 1000).toFixed(2);
  const message = ` 🎉CONGRATULATIONS! You finished in <span style="color: #3366aa;"><strong>${elapsedTime}</strong></span> seconds.`;

  // Save the high score and check if it made it into the top 10
  const isTopScore = saveHighScore(elapsedTime);
  const highScoreElement = document.getElementById('highScores');
  displayHighScores(highScoreElement, isTopScore ? elapsedTime : null);
  document.getElementById('modal-title').innerHTML = message;
  $('#exampleModalCenter').modal('show');

  // Disable the input field on completion
  typedValueElement.disabled = true;
  showPrompt_Button();
  hideForm();
  quotesDiv.classList.remove('active');
}
/**
 * Advances to the next word in the quote once the current word is completed.
 */
function advanceToNextWord() {
  wordIndex++; // Increment word index
  const completedText = words.slice(0, wordIndex).join(' ') + ' ';
  typedValueElement.value = completedText;

  // Highlight the next word
  highlightCurrentWord();
}
