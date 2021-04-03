var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    }
  ]
//need to add global variables for time/state and variables to point ot html elements.
    // keep track of time and state
    var questionIndex = 0;
    var time = questions.length * 15;
    var timerId;
    // reference DOM elements
    var questionsElement = document.getElementById("questions");
    var timerElement = document.getElementById("time");
    var choicesElement = document.getElementById("choices");
    var submitBtnement = document.getElementById("submit");
    var startBtnement = document.getElementById("start");
    var initialsElement = document.getElementById("initials");
    var feedbackElement = document.getElementById("feedback");


  //setInterval function.
  function defineTime(){
      time--
      timerElement.textContent=time
        if(time<=0 ){
            //enter quiz end function once written.
            alert("QUIZ IS OVER")
         }
  }
  //start quiz function.
    function quizStart(){
        var startScreen=document.getElementById("start-screen");
        startScreen.setAttribute("class","hide");
        questionsElement.removeAttribute("class");
        timerId=setInterval(defineTime, 1000);
        timerElement.textContent=time;
        grabQuestion()
    }
  //function to grab question from questions array and create DOM elements based on Question Array.
    function grabQuestion(){
        var currentQuestion=questions[questionIndex];
        var title=document.getElementById("question-title");
        title.textContent=currentQuestion.title
        choicesElement.innerHTML=""
        currentQuestion.choices.forEach(function (choice, index){
            var choiceButton=document.createElement("button");
            choiceButton.setAttribute("class", "choice")
            choiceButton.setAttribute("value", choice)
            choiceButton.textContent=choice;
            choiceButton.onclick=questionCheck
            choicesElement.appendChild(choiceButton)
        })

    }
  //function to check if answer is correct or incorrect.
    function questionCheck(){
        if(this.value !== questions[questionIndex].answer){
            time=time-10;
            timerElement.textContent=time;
            alert("YOU ARE WRONG!!!!")    
        }else{
            alert("YOU ARE CORRECT!!!")

        }
        questionIndex++ //
        if(questionIndex===questions.length){
            //quiz end function
            console.log("QUIZ IS OVER!")
        }else{
            grabQuestion()
        }
    }
  //function to end the quiz.

  //function to hide the question screen/ ending screen.

  //function to save high score.

  //add click events to tie events to the above functions.

  startBtnement.onclick=quizStart
