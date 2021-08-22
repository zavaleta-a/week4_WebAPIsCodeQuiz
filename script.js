// Keep all variables together for organization
var beginButton = document.getElementById('begin-btn');
var nextButton = document.getElementById('next-btn');

var questionContainer = document.getElementById('qa-container')

var questionEl = document.getElementById('question')

var answerBtnsEl = document.getElementById('answer-choices')

let randomQuestion, currentQuestion

//Event listener to begin the quiz
beginButton.addEventListener('click',startQuiz)
// Event listener for next button
nextButton.addEventListener('click',() => {
    currentQuestion++
    showNextQuestion()
})

function startQuiz() {
    console.log('begin quiz');
    beginButton.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    randomQuestion = questions.sort(() => Math.random())
    currentQuestion = 0
    showNextQuestion()
}



function showNextQuestion() {
    console.log('next question')
    resetState()
    showQuestion(randomQuestion[currentQuestion])
    

}

function resetState() {
    nextButton.classList.add('hidden')
    while (answerBtnsEl.firstChild) {
        answerBtnsEl.removeChild(answerBtnsEl.firstChild)
    }

}


function showQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnsEl.appendChild(button)
    })
}

function selectAnswer(x) {
    var selectBtn = x.target
    var correct = selectBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestion.length >  currentQuestion + 1){
        nextButton.classList.remove('hidden')
    } else {
        beginButton.innerText = 'Restart'
        beginButton.classList.remove('hidden')
    }
    
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
var questions = [
    {
        question: 'Question 1?', 
        answers: [
            {text: 'correct', correct: true},

            {text: 'not correct', correct: false},
                console.log('wrong')
            
        ]
    }

]

// Need to make sure questions are radomized for each play through

