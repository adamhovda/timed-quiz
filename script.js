
//creates initial text and button when a start
$triviabox = document.getElementById("triviaBox")
$triviabox.textContent = "Try to answer the following code related questions within the time limit.  Keep in mind an incorrect answer we penalize your score/time by 10 seconds";
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
    // document.getElementById("triviaBox").textContent = "Enter your initials";
    nextBtn.remove();
    outcomeDiv.remove();
    removeList.remove();
    console.log("high score page");
    console.log(secondsLeft);
    //create high score input form
    document.getElementById("scoreInput").style.display = "block";
    
    
    
    
    
    // const startBtn = document.createElement("button");
    // startBtn.innerHTML = "start";
    // const startButton = document.getElementById("start");
    // startButton.appendChild(startBtn);
}

// inputHiscore.addEventListener("input", saveScore);

// function createInput(){

//     let inputHiscore = document.createElement("input");
//     inputHiscore.setAttribute("type", "text");
//     inputHiscore.setAttribute("id", "highScore");
//     const hiScore = document.getElementById("scoreInput");
//     hiScore.appendChild(inputHiscore);

    

// };



myForm.addEventListener("submit", function saveScore(){


    let $initials = document.getElementById("initials");
    let leaderBoard = {
        name: $initials.value,
        score: secondsLeft
    };

    
    // localStorage.setItem("scoreAndName", JSON.stringify(leaderBoard));

    appendValueToStorage("scoreAndName", leaderBoard);


});


function appendValueToStorage(key, value) {
    var values = JSON.parse(localStorage.getItem(key));
    if (values === null) {
      values = [];
    }
  
    values.push(value);
    localStorage.setItem(key, JSON.stringify(values));
    console.log(localStorage.getItem(key));
  }


// sort leaderboard function


function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

//leaderboard function

let $scorepage = document.getElementById("scorePage");

$scorepage.addEventListener("click", function displayScores(){
    let scores = JSON.parse(localStorage.getItem("scoreAndName"));
    // scores.sort(dynamicSort(score));


    
    console.log(scores)
    document.getElementById('triviaBox').textContent = "LEADERBOARD";
    document.getElementById('triviaBox').appendChild(makeUL(scores));
    // makeUL(scores);

    // test code to make sure it can pull object and display
    // score.textContent = scores[0].name + scores[0].score;

    
    
    
    
})

// create a function to start the quiz

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i].name + "    "  + array[i].score ));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}


