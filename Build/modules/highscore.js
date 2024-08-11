// Function to save a new high score
export function saveHighScore(score) {
    let highScores = getHighScores();
    highScores.push(score);
    highScores.sort((a, b) => a - b); // Sort scores in ascending order

    if (highScores.length > 10) {
        highScores = highScores.slice(0, 10); // Keep only the top 10 scores
    }
    localStorage.setItem('highScores', JSON.stringify(highScores));

    return highScores.includes(score); // Return true if the score is in the top 10
}

// Function to retrieve high scores from local storage
export function getHighScores() {
    const highScores = localStorage.getItem('highScores');
    return highScores ? JSON.parse(highScores) : [];
}

// Function to display high scores
export function displayHighScores(element, currentScore = null) {
    const highScores = getHighScores();
    element.innerHTML = highScores.map((score, index) => {
            const isCurrentScore = score === currentScore;

            // Define styles for the current score
            const fontWeight = isCurrentScore ? 'bold' : 'normal';
            const backgroundColor = isCurrentScore ? 'black' : 'transparent';
            const color = isCurrentScore ? 'white' : 'inherit';

            // Use the styles in the list item
            return `<li style="font-weight: ${fontWeight}; background-color: ${backgroundColor}; color: ${color};">
                ${index + 1}. ${score} seconds
            </li>`;
        })
        .join('');
}
