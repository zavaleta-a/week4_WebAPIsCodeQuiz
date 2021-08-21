var beginButton = document.getElementById('begin-btn');

beginButton.addEventListener('click',startQuiz)

function startQuiz() {
    console.log('begin quiz');
    beginButton.classList.add('hidden')
    questionContainer.classList.remove('hidden')

}

var questionContainer = document.getElementById('qa-container')

function showNextQuestion() {
    console.log('next question')
    beginButton

}

function selectAnswer() {

}