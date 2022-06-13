// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";

//move dodger right
const moveDodgerRight =() => {
  const rightNumbers = dodger.style.left.replace('px','');
  const right =parseInt(rightNumbers,10);
  right<360? dodger.style.left =`${right + 5}px`: '';
}
//move dodger left
const moveDodgerLeft =()=>{
  const leftNumbers = dodger.style.left.replace('px','');
  const left = parseInt(leftNumbers,10);
  left>0? dodger.style.left= `${left - 5 }px`: '';
}
//move dodger down
const moveDodgerDown =()=>{
  const downNumbers = dodger.style.top.replace('px','');
  const down = parseInt(downNumbers,10);
  top<360? dodger.style.top= `${down + 5 }px`: '';
}
//move dodger top
const moveDodgerTop =()=>{
  const topNumbers = dodger.style.top.replace('px','');
  const top = parseInt(topNumbers,10);
  top>0? dodger.style.top= `${top - 5 }px`: '';
}


document.addEventListener("keydown", function (event) {
  (event.key === "ArrowLeft")? moveDodgerLeft(): 
  (event.key === "ArrowRight")? moveDodgerRight():
  (event.key === "ArrowUp") ? moveDodgerUp(): 
  (event.key === "ArrowDown")? moveDodgerDown():''
})








































