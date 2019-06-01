let order = [];
let playerOder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalid;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const red = document.querySelector("#red");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

strictButton.addEventListener('click',(event) => {
    console.log("text")
        if (strictButton.onClick == true) {
            strict = true;
        } else {
            strict = false;
        }
})

onButton.addEventListener('click', (event) => {
    console.log("poop")
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "-";
  } else {
    on = false;
    turnCounter.innerHTML = "";
   
  }
});

