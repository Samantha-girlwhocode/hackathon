var currentQuestionIndex = 0;
var questionsE1 = document.getElementById("questions");
var choicesE1 = document.getElementById("choices");
var startBtn = document.getElementById("start");
function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    questionsE1.removeAttribute("class");
    getQuestion();
  }
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    choicesE1.innerHTML = "";
    // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    // attach click event listener to each choice
    choiceNode.onclick = questionClick;
    // display on the page
    choicesE1.appendChild(choiceNode);
});
}
function questionClick() {
    // move to next question
    currentQuestionIndex++;
  
    // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }
  function quizEnd() {
    var resultsPage = document.getElementById("results");
    resultsPage.removeAttribute("class");
  }
startBtn.onclick = startQuiz;
console.log(questions)