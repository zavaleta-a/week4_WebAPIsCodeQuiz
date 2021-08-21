var beginButton = document.getElementById('begin-btn');

beginButton.addEventListener('click',startQuiz)

function startQuiz() {
    console.log('begin quiz');
    beginButton.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    randomQuestion = questions.sort(() => Math.random())
    currentQuestion = 0
    showNextQuestion()
}

var questionContainer = document.getElementById('qa-container')

function showNextQuestion() {
    console.log('next question')
    beginButton

}

function selectAnswer() {

}

var questions = [
    {
        question: 'Question 1?',
        answers: [
            {text: 'correct', correct: true},
            {text: 'not correct', correct: false},
            {text: 'not correct 2', correct: false},
            {text: 'not correct 3', correct: false},
            
        ]
    }

]

// Need to make sure questions are radomized for each play through

var randomQuestion, currentQuestions