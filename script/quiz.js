const quizForm = document.querySelector(".quiz");
const submit = document.querySelector("#click");
const output = document.querySelector("#ot");

const correctAnswer = [
  "90°",
  "right angled",
  "one right angle",
  "12,16,20",
  "Equilateral triangle",
  "45°",
];

function buttonClicked(){
    const formResult = new FormData(quizForm);
    let score = 0,
     i = 0;
    for(let value of formResult.values()){
        if(value === correctAnswer[i]){
            score = score+1;
            
        }
        i= i+1; 
    }
    console.log(score);
    output.innerText="Your score is " + score;
}

submit.addEventListener("click",  buttonClicked)
