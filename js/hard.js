

const allAudio = [
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/accommodate--_gb_1.mp3",
        answer:"accommodate",
        hint:"To provide space or help for someone’s needs."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/achievement--_gb_1.mp3",
        answer:"achievement",
        hint:"Something important gained through hard work or effort."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/acknowledgment--_gb_1.mp3",
        answer:"acknowledgment",
        hint:"Showing that you recognize or accept something."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/bureaucracy--_gb_1.mp3",
        answer:"bureaucracy",
        hint:"A system with many official rules and procedures."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/consciousness--_gb_1.mp3",
        answer:"consciousness",
        hint:"The state of being awake and aware of surroundings."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/determination--_gb_1.mp3",
        answer:"determination",
        hint:"A strong decision to keep trying and not give up."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/embarrassment--_gb_1.mp3",
        answer:"embarrassment",
        hint:"A feeling of shame or awkwardness."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/entrepreneur--_gb_1.mp3",
        answer:"entrepreneur",
        hint:"A person who starts and manages a business."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/exaggeration--_gb_1.mp3",
        answer:"exaggeration",
        hint:"Making something seem bigger or more important than it really is."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/fascinating--_gb_1.mp3",
        answer:"fascinating",
        hint:"Extremely interesting and able to hold attention."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/governmental--_gb_1.mp3",
        answer:"governmental",
        hint:"Related to a government or public authority."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/hypothesis--_gb_1.mp3",
        answer:"hypothesis",
        hint:"An idea or explanation that can be tested."
    },
     {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/independent--_gb_1.mp3",
        answer:"independent",
        hint:"Able to do things without help from others."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/maintenance--_gb_1.mp3",
        answer:"maintenance",
        hint:"The work needed to keep something in good condition."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/miscellaneous--_gb_1.mp3",
        answer:"miscellaneous",
        hint:"Made up of different kinds of things or items."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/opportunity--_gb_1.mp3",
        answer:"opportunity",
        hint:"A good chance to do or achieve something."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/perseverance--_gb_1.mp3",
        answer:"perseverance",
        hint:"Continuing to work hard even when things are difficult."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/responsibility--_gb_1.mp3",
        answer:"responsibility",
        hint:"A duty or task that someone is expected to handle."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/sophisticated--_gb_1.mp3",
        answer:"sophisticated",
        hint:"Advanced, complex, or highly developed."
    },
    {
        audio:"https://ssl.gstatic.com/dictionary/static/sounds/oxford/unpredictable--_gb_1.mp3",
        answer:"unpredictable",
        hint:"Impossible to know or guess before it happens."
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

            // score will be reduced -10 points
            score -= 10;
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
                title: "Finished!",
                text:"Waiting...",
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
        // result text
        if(score >= 120){
            sessionStorage.setItem("resultText","Outstanding!");
        }else if(score >= 80){
            sessionStorage.setItem("resultText","Well Done!");
        }else if(score >= 40){
            sessionStorage.setItem("resultText","Pretty Good!");
        }else if(score >= 0){
            sessionStorage.setItem("resultText","Keep Practicing!");
        }else{
            sessionStorage.setItem("resultText","Oops... Try Again!");
        }

        // Save score in sessionStorage
        sessionStorage.setItem("gameScore", score);

        // Save level in sessionStorage
        sessionStorage.setItem("currentLevel", "hard.html");
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
    
        // result text
        if(score >= 120){
            sessionStorage.setItem("resultText","Outstanding!");
        }else if(score >= 80){
            sessionStorage.setItem("resultText","Well Done!");
        }else if(score >= 40){
            sessionStorage.setItem("resultText","Pretty Good!");
        }else if(score >= 0){
            sessionStorage.setItem("resultText","Keep Practicing!");
        }else{
            sessionStorage.setItem("resultText","Oops... Try Again!");
        }
    
    // Save score in sessionStorage
    sessionStorage.setItem("gameScore", score);
        
    // Save level in sessionStorage
    sessionStorage.setItem("currentLevel", "hard.html");

    // directing to result page
    window.location.href = "result.html";

    });

}  

// home button confirm alert
const btnHome = document.getElementById("btn-home");
    btnHome.addEventListener("click", ()=>{
        // alert answer is correct
        Swal.fire({
            title: "Are you sure?",
            text: "Your progress will be reset",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes"
        }).then((result) => {
        if (result.isConfirmed){
            // directing to home
            window.location.href="home.html";
        }
    });
});

