const one = document.querySelector("#lenghtOne");
const two = document.querySelector("#lengthTwo");
const click = document.querySelector("#btn");
const ot = document.querySelector("#output");

function calculateAot(){
    if(one.value <0){
        ot.innerText = "Please enter valid base value"
    }
    const base = one.value;
    const ht = two.value;
    const multi = base * ht;
    const final = multi/2;
    const ans= final.toFixed(2);
    ot.innerText = "Area of triangle is "+ ans+"cm²";
  
}


click.addEventListener("click", calculateAot)