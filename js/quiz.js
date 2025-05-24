const questions = {
    english: {
        easy: [
            { question: "Which sentence is grammatically correct?", choices: ["She don't like apples.", "She doesn't likes apples.", "She doesn't like apples.", "She not like apples."], answer: "She doesn't like apples." },
            { question: "Choose the correct form of the verb: He ___ to school every day.", choices: ["go", "goes", "going", "gone"], answer: "goes" },
            { question: "Which word is a conjunction?", choices: ["Quickly", "And", "Cat", "Bright"], answer: "And" },
            { question: "Which sentence is in the past tense?", choices: ["I eat breakfast.", "I am eating breakfast.", "I ate breakfast.", "I will eat breakfast."], answer: "I ate breakfast." },
            { question: "Identify the pronoun: Maria and she went to the store.", choices: ["Maria", "Store", "She", "Went"], answer: "She" },
            { question: "Which sentence uses the correct subject-verb agreement?", choices: ["The boys plays soccer.", "The boy play soccer.", "The boys play soccer.", "The boy playing soccer."], answer: "The boys play soccer." },
            { question: "What is the plural of “child”?", choices: ["Childs", "Children", "Childes", "Childer"], answer: "Children" },
            { question: "Identify the verb in the sentence: The dog barked loudly.", choices: ["Dog", "Barked", "Loudly", "The"], answer: "Barked" },
            { question: "Choose the correct sentence:", choices: ["I has a car.", "I have a car.", "I haves a car.", "I having a car."], answer: "I have a car." },
            { question: "Which is an example of a proper noun?", choices: ["city", "book", "John", "river"], answer: "John" },
            { question: "Choose the correct past tense of “run”:", choices: ["Runed", "Runned", "Ran", "Runs"], answer: "Ran" },
            { question: "Which word is an adjective?", choices: ["Jump", "Soft", "Quickly", "Cat"], answer: "Soft" },
            { question: "What type of sentence is this: Close the door.", choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], answer: "Imperative" },
            { question: "Identify the correct sentence:", choices: ["He go to school.", "He goes to school.", "He going to school.", "He gone to school."], answer: "He goes to school." },
            { question: "Which word is an adverb?", choices: ["Slowly", "Dog", "Table", "Happy"], answer: "Slowly" },
            { question: "“I ___ already finished my homework.”", choices: ["has", "have", "having", "haded"], answer: "have" },
            { question: "Which is a compound sentence?", choices: ["I like pizza.", "I like pizza and I like pasta.", "I like pizza, pasta.", "Pizza is good."], answer: "I like pizza and I like pasta." },
            { question: "Select the correct sentence:", choices: ["She was run fast.", "She ran fast.", "She run fastly.", "She is ran fast."], answer: "She ran fast." },
            { question: "What is a synonym for “happy”?", choices: ["Sad", "Joyful", "Angry", "Loud"], answer: "Joyful" },
            { question: "Which sentence is written in future tense?", choices: ["I ate lunch.", "I eat lunch.", "I will eat lunch.", "I eating lunch."], answer: "I will eat lunch." },
            { question: "“They ___ playing basketball.”", choices: ["is", "was", "are", "be"], answer: "are" },
            { question: "What type of noun is “team”?", choices: ["Abstract", "Common", "Collective", "Proper"], answer: "Collective" },
            { question: "Which of the following is an interjection?", choices: ["Quickly", "Ouch!", "Under", "She"], answer: "Ouch!" },
            { question: "What is the comparative form of “good”?", choices: ["Gooder", "More good ", "Better", "Best"], answer: "Better" },
            { question: "Choose the correct possessive form:", choices: ["The books cover", "The book's cover", "The books' cover", "The book cover's"], answer: "The book's cover" }
        ],
        medium: [
            { question: "What is the primary purpose of academic writing?", choices: ["To entertain", "To inform and persuade using evidence", "To express personal feelings", "To tell a story"], answer: "To inform and persuade using evidence" },
            { question: "Which of the following is an essential characteristic of academic writing?", choices: ["Informal language", "Personal opinions without evidence", "Use of formal tone and citations", "Short and emotional responses"], answer: "Use of formal tone and citations" },
            { question: "What is a thesis statement?", choices: ["A joke to start the essay", "The main argument or point of the essay", "A question for the reader", "A conclusion"], answer: "The main argument or point of the essay" },
            { question: "Where is the thesis statement usually found?", choices: ["In the introduction", "In the body", "In the conclusion", "In the references"], answer: "In the introduction" },
            { question: "Which paragraph introduces the topic and provides background?", choices: ["Body paragraph", "Conclusion", "Introduction", "Appendix"], answer: "Introduction" },
            { question: "What does a body paragraph typically begin with?", choices: ["A joke", "A topic sentence", "A quote", "A citation"], answer: "A topic sentence" },
            { question: "What does the conclusion of an academic paper do?", choices: ["Introduces new arguments", "Summarizes and closes the discussion", "Adds examples", "Quotes from new sources"], answer: "Summarizes and closes the discussion" },
            { question: "What is a transition word?", choices: ["A formal citation", "A personal opinion", "A word that connects ideas", "A synonym"], answer: "A word that connects ideas" },
            { question: "Which of the following is a good transition word for contrast?", choices: ["Therefore", "Furthermore", "However", "Including"], answer: "However" },
            { question: "How many main parts does an academic essay usually have?", choices: ["One", "Two", "Three", "Four"], answer: "Three" },
            { question: "Which of the following is an example of a formal tone?", choices: ["“Stuff like that”", "“You know what I mean”", "“The evidence suggests that…”", "“It’s kinda obvious”"], answer: "“The evidence suggests that…”" },
            { question: "What kind of language should be avoided in academic writing?", choices: ["Passive voice", "First-person pronouns", "Slang and contractions", "Subject-specific vocabulary"], answer: "Slang and contractions" },
            { question: "Which of the following is an acceptable thesis statement?", choices: ["“I think pollution is bad.”", "“Pollution is an issue that affects public health and the environment.”", "“Pollution sucks.”", "“Don’t you hate pollution?”"], answer: "“Pollution is an issue that affects public health and the environment.”" },
            { question: "What is the correct order for an academic essay?", choices: ["Conclusion – Body – Introduction", "Introduction – Body – Conclusion", "Body – Introduction – Conclusion", "Title – References – Body"], answer: "Introduction – Body – Conclusion" },
            { question: "What is paraphrasing?", choices: ["Copying word-for-word", "Summarizing with exact words", "Rewriting an idea in your own words", "Changing only a few words"], answer: "Rewriting an idea in your own words" }
        ],
        hard: [
            { question: "Who is known as the Bard of Avon?", choices: ["Geoffrey Chaucer", "John Milton", "William Shakespeare", "Robert Frost"], answer: "William Shakespeare" },
            { question: "What is a sonnet?", choices: ["A poem with no rhyme", "A 14-line poem with a specific rhyme scheme", "A poem that tells a story", "A poem about love only"], answer: "A 14-line poem with a specific rhyme scheme" },
            { question: "Which of these is a famous romantic poet?", choices: ["T.S. Eliot", "William Blake", "Ezra Pound", "John Dryden"], answer: "William Blake" },
            { question: "What is the main theme of Robert Frost's The Road Not Taken?", choices: ["Nature's beauty", "War", "Choices and consequences", "Death"], answer: "Choices and consequences" },
            { question: "Who wrote Ode to a Nightingale?", choices: ["William Wordsworth", "John Keats", "Percy Shelley", "Tennyson"], answer: "John Keats" },
            { question: "What is iambic pentameter?", choices: ["A type of metaphor", "A five-line poem", "A line with ten syllables, alternating stress", "A poem written in old English"], answer: "A line with ten syllables, alternating stress" },
            { question: "What is the tone of Edgar Allan Poe's poem The Raven?", choices: ["Joyful", "Sarcastic", "Melancholy", "Excited"], answer: "Melancholy" },
            { question: "Which of the following poems is written by William Wordsworth?", choices: ["Ozymandias", "Daffodils", "The Raven", "The Waste Land"], answer: "Daffodils" },
            { question: "Who is the author of Do Not Go Gentle Into That Good Night?", choices: ["Dylan Thomas", "Walt Whitman", "Sylvia Plath", "Langston Hughes"], answer: "Dylan Thomas" },
            { question: "What is a haiku?", choices: ["A 14-line poem", "A poem with a repeating refrain", "A 3-line Japanese poem with 5-7-5 syllables", "A humorous poem"], answer: "A 3-line Japanese poem with 5-7-5 syllables" }
        ],
    },
    
};

let difficulty = "easy";
let questionIndex = 0;
let answered = false;
let countdownInterval;
let timeLeft = 10;

// Score tracking per difficulty
let score_easy = 0;
let score_medium = 0;
let score_hard = 0;

const questionText = document.getElementById("questionText");
const choicesContainer = document.getElementById("choicesContainer");
const difficultyBanner = document.getElementById("difficultyBanner");
const timerDisplay = document.getElementById("timerDisplay");

function getCurrentQuestions() {
    // Return a shuffled copy to randomize questions each time
    const arr = [...(questions[category][difficulty] || [])];
    return shuffleArray(arr);
}

// Fisher-Yates shuffle for randomizing array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Store current questions so order is consistent during this difficulty stage
let currentQuestions = [];

function updateDifficultyBanner() {
    difficultyBanner.src = `assets/${difficulty}.png`;
}

function startTimer(correctAnswer) {
    clearInterval(countdownInterval);
    timeLeft = 10;
    updateTimerDisplay();

    countdownInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            handleTimeout(correctAnswer);
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent = `Time left: ${timeLeft}s`;
}

function showQuestion() {
    if (!currentQuestions.length) {
        currentQuestions = getCurrentQuestions();
    }

    if (questionIndex >= currentQuestions.length) {
        checkPassingAndMoveOrEnd();
        return;
    }

    const q = currentQuestions[questionIndex];
    questionText.textContent = q.question;
    choicesContainer.innerHTML = "";

    q.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "choice";
        btn.textContent = choice;
        btn.onclick = () => submitAnswer(btn, q.answer);
        choicesContainer.appendChild(btn);
    });

    answered = false;
    startTimer(q.answer);
}

function submitAnswer(button, correctAnswer) {
    if (answered) return;
    answered = true;
    clearInterval(countdownInterval);

    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        } else if (btn === button) {
            btn.classList.add("wrong");
        }
    });

    if (button.textContent === correctAnswer) {
        if (difficulty === "easy") score_easy++;
        else if (difficulty === "medium") score_medium++;
        else if (difficulty === "hard") score_hard++;
    }

    setTimeout(() => {
        questionIndex++;
        showQuestion();
    }, 1500);
}

function handleTimeout(correctAnswer) {
    if (answered) return;
    answered = true;

    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    setTimeout(() => {
        questionIndex++;
        showQuestion();
    }, 1500);
}

function checkPassingAndMoveOrEnd() {
    // Calculate total questions for current difficulty
    const totalQuestionsForDifficulty = (questions[category][difficulty] || []).length;
    let currentScore = 0;

    if (difficulty === "easy") currentScore = score_easy;
    else if (difficulty === "medium") currentScore = score_medium;
    else if (difficulty === "hard") currentScore = score_hard;

    // Passing is 60%
    const passingScore = Math.ceil(totalQuestionsForDifficulty * 0.6);

    if (currentScore < passingScore) {
        // Failed this stage, redirect to result immediately
        redirectToResult();
        return;
    }

    // Passed, move to next difficulty or finish
    if (difficulty === "easy") {
        difficulty = "medium";
    } else if (difficulty === "medium") {
        difficulty = "hard";
    } else {
        redirectToResult();
        return;
    }

    // Reset for next difficulty stage
    questionIndex = 0;
    currentQuestions = [];
    updateDifficultyBanner();
    showQuestion();
}

function redirectToResult() {
    const totalScore = score_easy + score_medium + score_hard;
    window.location.href = `result.php?category=${category}&score_easy=${score_easy}&score_medium=${score_medium}&score_hard=${score_hard}`;
}

// === Init ===
updateDifficultyBanner();
showQuestion();
