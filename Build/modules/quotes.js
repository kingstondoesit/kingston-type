var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const minLength = 80;
const maxLength = 90;
// Fetch a random quote within the specified length range
export const fetchQuote = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://api.quotable.io/random?minLength=${minLength}&maxLength=${maxLength}`);
        if (!response.ok) {
            const error = new Error(`HTTP error! status: ${response.status}`);
            error.status = response.status;
            throw error;
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching random quote:', error);
        return null;
    }
});
//Array containing quotes for the typing game
export const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
    'The world is full of obvious things which nobody by any chance ever observes.',
    'It is a capital mistake to theorize before one has data.',
    'The best way to keep a secret is to tell no one.',
    'To a great mind, nothing is little.',
    'You see, but you do not observe. The distinction is clear.',
    'There is nothing more important than a good, safe, secure home.',
    'A man who is a master of patience is a master of everything else.',
    'It is not enough to be busy; so are the ants. The question is: What are we busy about?',
    'The truth is rarely pure and never simple.',
    'The mind is its own master, and with it, one can conquer any obstacle.',
    'In the darkness of ignorance, knowledge is the only beacon.',
    'To deduce is to dissect, and in dissection, lies the truth.',
    'The curious mind never rests, for it is always in search of the unknown.',
    'When confronted with the improbable, it is prudent to consider all possibilities before dismissing them.',
    'It has become clear to me that truth is often buried beneath layers of deception, requiring a sharp mind to uncover.',
    'I have learned that a thorough examination of the facts will often yield a surprising revelation.',
    'In the course of an investigation, one must be prepared to question even the most deeply held assumptions.',
    'The true nature of a thing is often revealed when one takes the time to observe it from a different perspective.',
    'I have often noted that when a theory seems to fall apart, it is usually because a crucial detail has been overlooked.',
    'It is a peculiar fact that the most extraordinary events often have the simplest explanations.',
    'I have found that the greatest insights often come when one is on the brink of abandoning the search.',
    'The pursuit of truth requires both patience and a relentless curiosity.',
    'To observe is to uncover the details that others might overlook.',
    'In the silence of the mind, the answer often reveals itself.',
    'One must consider the most trivial detail, for it may hold the key to the entire case.',
    'A mind sharpened by logic can cut through the fog of confusion.',
    'The smallest clue, when properly examined, can unravel the most complex mystery.',
    'It is a mistake to theorize before one has all the facts; bias clouds judgment.',
    'The truth is often hidden in plain sight, waiting for the discerning eye to discover it.',
    'A keen observation can speak louder than a thousand words.',
    'The mind, once expanded by a new idea, never returns to its original dimension.',
    'A clever deduction is worth more than a hundred blind guesses.',
    'In the intricate web of lies, the truth is the single thread that never breaks.',
    'The art of detection lies in recognizing the extraordinary within the ordinary.',
    'A mystery, no matter how small, is a challenge that must be met with a sharp intellect.',
    'In the vastness of the unknown, reason is the only compass one needs.',
    'The truth, though elusive, is always within reach of a determined mind.',
    'Every question has an answer, and every answer reveals a new question.',
    'The mind must be both a blade and a shield, cutting through deception while guarding against falsehoods.',
    'In every lie, there is a grain of truth, and in that truth lies the answer.',
    'It is not the size of the mystery, but the depth of the solution that satisfies the mind.',
    'When the facts do not fit the theory, it is the theory that must be adjusted, not the facts.',
    'I have observed that in the labyrinth of human thought, the most unexpected conclusions are often the correct ones.',
    'In matters of deduction, it is essential to remain open to the possibility that what seems impossible may indeed be true.',
    'One must always be prepared to abandon a cherished hypothesis when the facts no longer support it.',
    'It is a curious thing, but often the most complex problems have the simplest solutions, hidden in plain sight.',
    'In my experience, the most perplexing mysteries are often resolved by the smallest of details, overlooked by the untrained eye.',
    'Every mystery, however obscure, has its solution waiting to be uncovered.',
    'Logic is the sword, and reason the shield, in the battle against deception.',
    'The smallest detail, when observed, can unravel the grandest of schemes.',
    'A silent mind is not idle, but is contemplating the complexities of the world.',
    'In the maze of facts, only the most discerning can find the way out.',
    'Patience is the cornerstone of every successful investigation.',
    'There is no enigma that cannot be solved by the relentless pursuit of truth.',
    'The world is a puzzle, and it is our duty to piece it together.',
    'What appears ordinary is often the key to understanding the extraordinary.',
    'An unsolved case is merely a challenge waiting to be met.',
    'The truth is often hidden in plain sight, awaiting the perceptive eye.',
    'One must question everything, for certainty is the enemy of discovery.',
    'In every lie, there is a seed of truth waiting to sprout.',
    'The greatest secrets are often found in the most mundane of places.',
    'A mind unburdened by prejudice sees the world in its true colors.',
    'To understand the whole, one must first comprehend the smallest part.',
    'It is often the case that when one path seems closed, another quietly opens, revealing a different truth.',
    'I have found that when the mind is free from distraction, the solution often presents itself with startling clarity.',
    'One must be wary of accepting the obvious, for it is often a veil for something far more intricate.',
    'In my experience, a conclusion reached in haste is usually the farthest from the truth.',
    'There are times when the simplest explanation is the correct one, though it is rarely so at first glance.',
    'The mind, once expanded by knowledge, cannot easily return to ignorance, nor should it.',
];
