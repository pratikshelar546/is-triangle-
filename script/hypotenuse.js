const angle1 = document.querySelector("#first");
const angle2 = document.querySelector("#second");
const button = document.querySelector("#click");
const msg = document.querySelector("#ot");


function calculateHypotenuse(){
   const a = angle1.value;
   const b = angle2.value;
   const sum = Math.sqrt((a*a)+(b*b));
   msg.innerText="The length of Hypotanouse is " + sum;
}
button.addEventListener("click", calculateHypotenuse);