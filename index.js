// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}
function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const right = parseInt(rightNumbers, 10);
  if (right < 360) {
    dodger.style.left = `${right + 5}px`;
  }
}
function moveDodgerUp() {
  const topNumbers = dodger.style.bottom.replace("px", "");
  const top = parseInt(topNumbers, 10);
  if (top < 360) {
    dodger.style.bottom = `${top + 5}px`;
  }
}
function moveDodgerDown() {
  const bottomNumbers = dodger.style.top.replace("px", "");
  const down = parseInt(bottomNumbers, 10);
  if (down < 360) {
    dodger.style.top = `${down + 5}px`;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  } else if (event.key === "ArrowUp") {
    moveDodgerUp();
  } else if (event.key === "ArrowDown") {
    moveDodgerDown();
  }
});
