//Define Variables
var hideQuestionContainer = document.getElementById("question-container").style.display = "none";
var questionContainerEl = document.getElementById("question"
);
var questions = [
    {
       questionText: "Commonly used data types DO NOT include:",
       answers: ["strings", "booleans", "alerts", "numbers"],
       correctIndex: 3
    },
    {
       questionText: "My first question 2?",
       answers: ["A1", "A2", "A3", "A4"],
       correctIndex: 3
    },
    {
       questionText: "My first question 3?",
       answers: ["A1", "A2", "A3", "A4"],
       correctIndex: 2
    },
    {
       questionText: "My first question 4?",
       answers: ["A1", "A2", "A3", "A4"],
       correctIndex: 0
    },
];

var correctAnswers = 0;
var incorrectAnswers = 0;

//Start Quiz
var startQuiz = document.querySelector("#start");

startQuiz.addEventListener("click", function () {
    hideInstroductionButton();
    hideStartButton();
    displayQuestion();
    startTimer();
});

//Hide Start Button
function hideStartButton() {
    document.getElementById("start").style.visibility = "hidden";
};

//Hide Introduction Text
function hideInstroductionButton() {
    document.getElementById("instructions").style.visibility = "hidden";
};

//Start Timer
function startTimer(){
    var secs = 75;
    setInterval(function(){
    if(secs >= 0)
        document.getElementById("timer").innerHTML = secs + " seconds";
        secs--;
        if(secs == 00)
        {
            clearInterval(secs);
            // alert("Sorry. Time's up!");
            
        }
       
        }, 1000);
};

//Display Quiz Question
function displayQuestion() {
    document.getElementById("question-container").style.display = "block";
    questionContainerEl.innerHTML = questions[0].questionText
};





















// function resetTimer()
// {
    
// }

// $("#start").click(function(){
//     startTimer();
// });

