

const allAudio = [
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/apple--_gb_1.mp3",
        answer:"apple",
        hint:"A round fruit that is sweet and crunchy."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/banana--_gb_1.mp3",
        answer:"banana",
        hint:"A long yellow fruit that monkeys like."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/school--_gb_1.mp3",
        answer:"school",
        hint:"A place where children learn new things."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/window--_gb_1.mp3",
        answer:"window",
        hint:"You look through it to see outside."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/pencil--_gb_1.mp3",
        answer:"pencil",
        hint:"You use it to write or draw."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/garden--_gb_1.mp3",
        answer:"garden",
        hint:"A place where flowers and plants grow."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/rainbow--_gb_1.mp3",
        answer:"rainbow",
        hint:"Colorful lines in the sky after rain."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/animal--_gb_1.mp3",
        answer:"animal",
        hint:"A living thing like a cat, dog, or bir"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/teacher--_gb_1.mp3",
        answer:"teacher",
        hint:"A person who helps students learn."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/bicycle--_gb_1.mp3",
        answer:"bicycle",
        hint:"A two-wheel ride you pedal with your feet."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/library--_gb_1.mp3",
        answer:"library",
        hint:"A quiet place with many books to read."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/morning--_gb_1.mp3",
        answer:"morning",
        hint:"The early part of the day after waking up."
    },
     {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/picture--_gb_1.mp3",
        answer:"picture",
        hint:"A drawing or photo you can look at."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/blanket--_gb_1.mp3",
        answer:"blanket",
        hint:"A soft cover to keep you warm."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/elephant--_gb_1.mp3",
        answer:"elephant",
        hint:"A very big gray animal with a long trunk."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/holiday--_gb_1.mp3",
        answer:"holiday",
        hint:"A special day for relaxing or having fun."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/sandwich--_gb_1.mp3",
        answer:"sandwich",
        hint:"Food made with bread and fillings inside."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/sunshine--_gb_1.mp3",
        answer:"sunshine",
        hint:"Bright light and warmth from the sun."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/chocolate--_gb_1.mp3",
        answer:"chocolate",
        hint:"A sweet treat loved by many people."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/computer--_gb_1.mp3",
        answer:"computer",
        hint:"A machine used for learning, games, and work."
    }
    ];

    //shuffle the array
    const shuffled = allAudio.sort(()=> Math.random() - 0.5); 
    //randomly take 10 questions
    const gameQuest= shuffled.slice(0,10); 

    

    // get element from html
    const btnAudio = document.getElementById("btn-audio");
    const btnCheck = document.getElementById("btn-check");
    const btnHint = document.getElementById("btn-hint");
    const btnFinish = document.getElementById("btn-finish");
    const userInput = document.getElementById("userInput");
    const scoreNum = document.getElementById("scoreNum");
    const hintCard = document.getElementById("hintCard");
    const hintText = document.getElementById("hintText");

    // play audio
    btnAudio.addEventListener("click",()=>{
        // get the current question
        const src = gameQuest[currentQuest].audio;

        const audio = new Audio(src);
        audio.play();
    });

    // hint displayed
    btnHint.addEventListener("click", ()=>{
        // change hintCard visibility: hidden -> visible
        if (hintCard.style.visibility === 'hidden' || hintCard.style.visibility === ''){
            hintCard.style.visibility = 'visible';
        }

        // matching the current question and the hint
        const currentHint = gameQuest[currentQuest].hint;
        // display the hint
        hintText.textContent = currentHint;
    });

    //current question
    let currentQuest= 0;
    //user score
    let score = 0;

    // check user answer
    btnCheck.addEventListener("click", ()=>{
        // get the user answer
        const userAnswer = userInput.value.toLowerCase().trim(); //trim for remove space
        // matching the current question & correct answer    
        const correctAns = gameQuest[currentQuest].answer;

        // score add logic
        if(userAnswer === correctAns){
            
            // alert answer is correct
            Swal.fire({
                title: "Good job!",
                text: "Your answer is correct!",
                icon: "success",
                confirmButtonText: "Continue"
            });
            // score will be added +20 points
            score += 20;
           
        }else{
            // alert answer is incorrect
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "The correct answer is : "  + correctAns,
                confirmButtonText: "Continue"
            });

            // score will be reduced -5 points
            score -= 5;
        }
        
        // blank the input text
        userInput.value ="";

        // move to the next question
        currentQuest++;

        // hide the hintCard after check the answer
        if (hintCard.style.visibility === 'visible' || hintCard.style.visibility === ''){
            hintCard.style.visibility = 'hidden';
        }

        // display the score on the header
         scoreNum.textContent = 'Score : ' + score;

        // if all questions were displayed
        if(currentQuest === 10){
            // disable check button
            btnCheck.disabled = true;
            
            // give alert
            Swal.fire({
                title: "Game Finished!",
                text:"You will be directed to another page...",
                icon: "success",
                confirmButtonText: "OK",
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false
            }).then(()=>{
                // directing to another page
            window.location.href="result.html";
            }); 
        }
        // Save score in sessionStorage
        sessionStorage.setItem("gameScore", score);
    });
    

// timer game

// get element from html
const timerText = document.getElementById("timer");

// timer 20 menit
let timeGame = 600; 

const timer = setInterval(() => {

    timeGame--;

    // minutes
    const minutes = Math.floor(timeGame / 60);

    // seconds
    const seconds = timeGame % 60;

    // format 2 digits using padStart()
    timerText.textContent =
        `${minutes} : ${seconds.toString().padStart(2, "0")}`;
    
    // if the timer was 0:00
    if(timeGame <=0){
       
        clearInterval(timer);
        gameOver();
    }

}, 1000);

function gameOver(){

    // disable check button
    btnCheck.disabled = true;

    Swal.fire({
        title: "Time is Over!",
        text:"Don't worry, you doing a great job...",
        icon: "warning",
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false
    }).then(() => {
        
    // directing to result page
    window.location.href = "result.html";

    });
}  