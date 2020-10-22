var startPage = document.getElementById('start-page');
var startPageButton = document.getElementById('startPageButton');
var quizContainer = document.getElementById('quizContainer');
startPageButton.addEventListener('click', function(){
	startPage.style.visibility = "hidden";
	quizContainer.style.visibility = 'visible';
})
// Questions for the Quiz_App
var questions = [{
    "question": "What does HTML stand for?",
    "option1": "Hypo Text Language",
    "option2": "Hyperlink and Text Markup Language",
    "option3": "Hyper Text Markup Language",
    "option4": "Home Tool Markup Language",
    "answer": "3"
}, {
    "question": "How many types of heading does an HTML contain?",
    "option1": "10",
    "option2": "6",
    "option3": "8",
    "option4": "16",
    "answer": "2"
}, {
    "question": "< br  / > What type of tag is this?",
    "option1": "not correct tag",
    "option2": "An opening tag",
    "option3": "A broken one",
    "option4": "Break tag",
    "answer": "4"
}, {
    "question": "Which of the following is an example of an empty element?",
    "option1": "< img / >",
    "option2": "<img> <img>",
    "option3": "< / img>",
    "option4": "not exist",
    "answer": "1"
}, {
    "question": "2 * 2 * 2?",
    "option1": "4",
    "option2": "18",
    "option3": "8",
    "option4": "20",
    "answer": "3"
}, {
    "question": "5 + 55 + 4?",
    "option1": "74",
    "option2": "80",
    "option3": "64",
    "option4": "66",
    "answer": "3"
}, {
    "question": "js is abbreviation to",
    "option1": "Java",
    "option2": "JavaScript",
    "option3": "graphics",
    "option4": "json",
    "answer": "2"
}, {
    "question": "2 * 10",
    "option1": "202",
    "option2": "3",
    "option3": "50",
    "option4": "20",
    "answer": "4"
}, {
    "question": "6 * 6 + 6?",
    "option1": "90",
    "option2": "50",
    "option3": "42",
    "option4": "44",
    "answer": "3"
}, {
    "question": " What HTML tag creates a bulleted list?",
    "option1": "ul",
    "option2": "ol",
    "option3": "bl",
    "option4": "br",
    "answer": "1"
}];

//soccer for game
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

//questions and options
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

//next button and result
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};


function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		resultCont.style.visibility = "visible"
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

