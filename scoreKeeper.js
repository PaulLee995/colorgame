let p1score = document.querySelector("#p1score");
let p2score = document.querySelector("#p2score");
let playingTo = document.querySelector("#playingTo");

let input = document.querySelector("#input");
let p1btn = document.querySelector("#p1btn");
let p2btn = document.querySelector("#p2btn");
let reset = document.querySelector("#reset");

let num1 = 0;
let num2 = 0;

input.addEventListener("change", function(){
  playingTo.textContent = input.value;
})

p1btn.addEventListener("click", function(){
  num1++;
  if (num1 <= Number(input.value)) {
    p1score.textContent = String(num1);
    if (num1 === Number(input.value)) {
      p1score.classList.add("green");
    }
  }
});

p2btn.addEventListener("click", function() {
  num2++;
  if (num2 <= Number(input.value)) {
    p2score.textContent = String(num2);
    if (num2 === Number(input.value)) {
      p2score.classList.add("green");
    }
  }
});

reset.addEventListener("click", function(){
  p1score.textContent = "0";
  p1score.classList.remove("green");
  p2score.textContent = "0";
  p2score.classList.remove("green");

  playingTo.textContent = "Select value";
  input.value = "none";
});
