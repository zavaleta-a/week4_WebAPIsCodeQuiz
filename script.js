// Keep all variables together for organization
var beginButton = document.getElementById('begin-btn');
var nextButton = document.getElementById('next-btn');


var questionContainer = document.getElementById('qa-container')

var questionEl = document.getElementById('question')

var answerBtnsEl = document.getElementById('answer-choices')

let randomQuestion, currentQuestion

//Event listener to begin the quiz
beginButton.addEventListener('click',startQuiz)
beginButton.addEventListener('click', startTimer)

// Event listener for next button
nextButton.addEventListener('click',() => {
    currentQuestion++
    showNextQuestion()
})
// Begin Quiz
function startQuiz() {
    console.log('begin quiz');
    beginButton.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    randomQuestion = questions.sort(() => Math.random() -.3)
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
        question: 'What does CDN stand for?', 
        answers: [
            {text: 'Content Data Nest', correct: false},
            
            {text: 'Content Delivery Network', correct: true},

            {text: 'Certified Debugging Node', correct: false},

            {text: 'Cascading Data Network', correct: false},
               
            
        ]
    },
    {
        question: 'Which is the correct way to camel case?', 
        answers: [
            {text: 'camelCase', correct: true},

            {text: 'caMelCaSe', correct: false},

            {text: 'CamelCase', correct: false},

            {text: 'cameLCase', correct: false},
            
        ]
    },

    {
        question: 'True or Flase. Any number, positive or nagative, is truthy.', 
        answers: [
            {text: 'True', correct: true},

            {text: 'False', correct: false},
            
        ]
    },

    {
        question: 'What does HTML stand for?', 
        answers: [
            
            {text: 'Hyper Text Management Language', correct: false},
            
            {text: 'Hyper Tech Module Links', correct: false},

            {text: 'Hypertext Markup Language', correct: true},

            {text: 'Hyper Text Markup Levers', correct: false},
            
        ]
    },

    
]


//Timer

var startingTime = 1;
let time = startingTime * 60;

var timerEl = document.getElementById('timer');



function startTimer(){
    var counter = time;
    setInterval(function() {
      counter--;
      if (startingTime >= 0) {
        span = document.getElementById('timer');
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('Out of time');
          clearInterval(counter);
      }
    }, 1000);
  }
 
  







