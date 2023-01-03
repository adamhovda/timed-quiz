
//creates initial text and button when a start
document.getElementById("triviaBox").textContent = "Try to answer the following code related questions within the time limit.  Keep in mind an incorrect answer we penalize your score/time by 10 seconds";
// const startBtn = document.createElement("button");
// startBtn.innerHTML = "start";
// const startButton = document.getElementById("start");
// startButton.appendChild(startBtn);
// moved from line 49 to test
let outcomeDiv = document.getElementById("correctWrong");
let answ = document.querySelectorAll(".answers");
let removeList = document.getElementById("ulremove");

let questionArr = [];
let count = 0;

// create object to hold all the questions and answers and assign the correct answer as true


const questionAnswer1 = {
    question: "Commonly used data types do not include:",
    answer: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2
};

const questionAnswer2 = {
    question: "the condition in an if/else is enclosed with",
    answer: ["parenthesis", "quotes", "curly brackets", "square brackets"],
    correctAnswer: 0 
};

const questionAnswer3 = {
    question: "Arrays in Javascript can be used to store",
    answer: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 3
};

const questionAnswer4 = {
    question: "String values must be enclosed within _______ when being assigned as variables",
    answer: ["commas", "quotes", "curly brackets", "parenthesis"],
    correctAnswer: 1
};

questionArr.push(questionAnswer1, questionAnswer2, questionAnswer3, questionAnswer4);

// console.log(questionArr);

//funcition to show question
function showQuestion(q){

        let triviaDiv = document.getElementById("triviaBox");
        triviaDiv.textContent = q.question;


        answ.forEach(function(element, index){
            element.textContent = q.answer[index];
            element.addEventListener("click", function(){
                if (q.correctAnswer == index){
                    outcomeDiv.textContent = "Correct, click next";
                    console.log("correct, click next");


                    
                } else {
                    outcomeDiv.textContent = "Wrong, click next";
                    // secondsLeft = secondsLeft - 10;
                    console.log("wrong, click next");




                }
            })
        
        });    
    }
console.log(questionArr.length);


// showQuestion(questionArr[0]);

nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", function(){
    //set timer on first click
    if (count === 0){setTime();}
    // creat if to go to enter score page after last question
    if (count === questionArr.length){highscore()}
    showQuestion(questionArr[count]);
    count++;

    document.getElementById("correctWrong").textContent = "";

    


});

//timer


var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
    window.timerInterval = setInterval(function() {
        let timerEl = document.getElementById("timer");
        secondsLeft--;
        timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
        clearInterval(timerInterval);


        }   

    }, 1000);
}

//create high score page

function highscore(){
    clearInterval(timerInterval);
    document.getElementById("triviaBox").textContent = "Enter your initials";
    nextBtn.remove();
    outcomeDiv.remove();
    removeList.remove();
    console.log("high score page");
    console.log(secondsLeft);
}




// create a function to start the quiz



