

const allAudio = [
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/apple--_gb_1.mp3",
        answer:"apple"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/banana--_gb_1.mp3",
        answer:"banana"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/school--_gb_1.mp3",
        answer:"school"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/window--_gb_1.mp3",
        answer:"window"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/pencil--_gb_1.mp3",
        answer:"pencil"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/garden--_gb_1.mp3",
        answer:"garden"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/rainbow--_gb_1.mp3",
        answer:"rainbow"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/animal--_gb_1.mp3",
        answer:"animal"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/teacher--_gb_1.mp3",
        answer:"teacher"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/bicycle--_gb_1.mp3",
        answer:"bicycle"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/library--_gb_1.mp3",
        answer:"library"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/morning--_gb_1.mp3",
        answer:"morning"
    },
     {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/picture--_gb_1.mp3",
        answer:"picture"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/blanket--_gb_1.mp3",
        answer:"blanket"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/elephant--_gb_1.mp3",
        answer:"elephant"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/holiday--_gb_1.mp3",
        answer:"holiday"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/sandwich--_gb_1.mp3",
        answer:"sandwich"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/sunshine--_gb_1.mp3",
        answer:"sunshine"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/chocolate--_gb_1.mp3",
        answer:"chocolate"
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/computer--_gb_1.mp3",
        answer:"computer"
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

    // play audio
    btnAudio.addEventListener("click",()=>{
        // get the current question
        const src = gameQuest[currentQuest].audio;

        const audio = new Audio(src);
        audio.play();
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
            // alert("Correct!");
        
            Swal.fire({
                title: "Good job!",
                text: "Your answer is correct!",
                icon: "success",
                confirmButtonText: "Continue"
            });

            score += 10;
            
        }else{
          
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Incorrect! The answer is : "  + correctAns,
                confirmButtonText: "Continue"
            });
            
        }
        
        // blank the input text
        userInput.value ="";

        // move to the next question
        currentQuest++;

        // display the score
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
 
    });
    



// timer game


// get element from html
const timerText = document.getElementById("timer");

// timer 20 menit
let timeGame = 600; 

const timer = setInterval(() => {

    timeGame--;

    // minute
    const minutes = Math.floor(timeGame / 60);

    // second
    const seconds = timeGame % 60;

    // format 2 digits using padStart()
    timerText.textContent =
        `${minutes} : ${seconds.toString().padStart(2, "0")}`;

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