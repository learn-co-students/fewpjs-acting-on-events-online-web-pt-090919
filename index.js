// Your code here
let dodger = document.getElementById("dodger");
  dodger.style.backgroundColor = "#000000";
  dodger.style.backgroundColor = "#FF69B4";
  dodger.style.left;
  dodger.style.bottom;
  dodger.style.bottom = "100px";
  dodger.style.bottom = "0px";
  
document.addEventListener("keydown", function(e) {
  console.log(e.key);
  });
  

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0 && left < 360) {
    dodger.style.left = `${left + 10}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});