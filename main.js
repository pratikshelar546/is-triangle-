const firstAngle = document.querySelector("#angle1");
const secondAngle = document.querySelector("#angle2");
const thirdAngle = document.querySelector("#angle3");
const button = document.querySelector("#click");
const massage = document.querySelector("#msg");

function calculateSum(){
    const angleOne = firstAngle.value;
    const angleTwo = secondAngle.value;
    const angleThree = thirdAngle.value;

    const sum = Number(angleOne) + Number(angleTwo) + Number(angleThree);
    console.log(sum);
    isTrianle(sum);
}

function isTrianle(sum){
   if(sum === 180){
       massage.innerText ="yehhh this angle form trangle";
    }else{
        massage.innerText= "Sorry this angle cannot form triangle";
    }
}


button.addEventListener("click", function buttonIsClicked(){
     calculateSum();
     console.log("clicked")
})