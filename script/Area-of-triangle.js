const one = document.querySelector("#lenghtOne");
const two = document.querySelector("#lengthTwo");
const click = document.querySelector("#btn");
const ot = document.querySelector("#output");

function calculateAot(){
    const base = one.value;
    const ht = two.value;
    const multi = base * ht;
    const final = multi/2;
    ot.innerText = "Area of triangle is "+ final+"cm²";
  
}


click.addEventListener("click", calculateAot)