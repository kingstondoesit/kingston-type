import { quotes } from './modules/quotes.js';
import { saveHighScore, displayHighScores } from './modules/highscore.js';

// Initialize variables to store the list of words and track the player's position
let words = [];
let wordIndex = 0;
let startTime = Date.now();
let timerInterval;

// Page elements
const mainElement = document.querySelector('.main');
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const promptStart = document.getElementById('prompt_start');
const promptAgain = document.getElementById('prompt_again');
const startButton = document.getElementById('start');
const timerElement = document.getElementById('timer');
const welcome = document.getElementById('welcome');

const hidePrompt_Button = () => {
    //Hide prompt message
    promptAgain.classList.add('none');
    promptStart.className = 'none';

    //Hide Start Button
    startButton.style.display = 'none';
    startButton.classList.add('none');

    //Hide Welcome Message
    welcome.style.display = 'none';
};

const showPrompt_Button = () => {
    //Show start button and prompt message to play again
    promptAgain.classList.remove('none');
    startButton.classList.remove('none');
    startButton.style.display = 'inline-block';
};

const showTimer = () => {
    //Show Timer element when start button is clicked
    timerElement.classList.remove('none');
    timerElement.style.display = 'inline-block';

    //Reset Timer
    timerElement.innerText = '0.0';
};

const startTimer = () => {
    startTime = new Date().getTime();
    timerInterval = setInterval(() => {
        const elapsedTime = ((new Date().getTime() - startTime) / 1000).toFixed(1);
        timerElement.innerText = `${elapsedTime}s`;
    }, 1000); // Update timer every 1000ms/1s for smooth display
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
        event.preventDefault(); // Prevent the page from refreshing
    }
});

// Timer element
let isTimerStarted = false;

// Event listener for the start button
startButton.addEventListener('click', () => {
    //Display Timer
    showTimer();

    // Push the .main element up
    mainElement.classList.add('active');

    // Select a random quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];

    // Split the quote into words
    words = quote.split(' ');

    // Reset the word index for tracking
    wordIndex = 0;

    /* Update the UI
    Create an array of span elements for each word */

    const spanWords = words.map((word) => `<span> ${word} </span>`);

    hidePrompt_Button();

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

// Event listener for user input in the textbox
typedValueElement.addEventListener('input', () => {
    // Start the timer only on the first input
    if (!isTimerStarted) {
        startTimer();
        isTimerStarted = true;
    }
    // Get the value the user has typed so far
    const typedValue = typedValueElement.value;

    // Get the current word
    const currentWord = words[wordIndex];

    // Split the typed value by spaces to get all words typed so far
    const typedWords = typedValue.trim().split(' ');

    // Check if the last typed word matches the current word in the quote
    if (typedWords[wordIndex] === currentWord) {
        if (wordIndex === words.length - 1) {
            // End of sentence
            // Stop the timer
            stopTimer();

            // Calculate the elapsed time
            const elapsedTime = (new Date().getTime() - startTime) / 1000;
            const message = `CONGRATULATIONS! You finished in <strong>${elapsedTime}</strong> seconds.`;

            // Display the modal with the success message
            document.getElementById('modalMessage').innerHTML = message;
            $('#exampleModalCenter').modal('show');

            // Save the high score and check if it made it into the top 10
            const isTopScore = saveHighScore(elapsedTime);

            // Display the high scores with the current score highlighted if it's in the top 10
            const highScoreElement = document.getElementById('highScores');
            displayHighScores(
                highScoreElement,
                isTopScore ? elapsedTime : null
            );

            // Disable the input field on completion
            typedValueElement.disabled = true;

            showPrompt_Button();

            // mainElement.classList.remove('active');

        } else if (typedValue.endsWith(' ')) {
            // Move to the next word
            wordIndex++;

            // Append the completed words in the text box
            const completedText = words.slice(0, wordIndex).join(' ') + ' ';
            typedValueElement.value = completedText;

            // Highlight the next word in the quote
            for (const wordElement of quoteElement.children) {
                wordElement.className = '';
            }
            quoteElement.children[wordIndex].className = 'highlight';
        }

    } else if (currentWord.startsWith(typedWords[wordIndex])) {
        // Correct typing so far, clear any error styling
        typedValueElement.className = '';

    } else {
        // Error state, add error styling
        typedValueElement.className = 'error';
    }
});
