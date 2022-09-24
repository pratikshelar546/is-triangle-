const angle1 = document.querySelector("#first");
const angle2 = document.querySelector("#second");
const button = document.querySelector("#click");
const msg = document.querySelector("#ot");


function calculateHypotenuse(){
   const a = Number(angle1.value);
   const b = Number(angle2.value);
   const sum = Math.sqrt((a*a)+(b*b));
  const ans= sum.toFixed(2);
   msg.innerText="The length of Hypotanouse is " +ans;
}
button.addEventListener("click", calculateHypotenuse);