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

const turnConter = document.querySelector("#turn");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const red = document.querySelector("#red");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

strictButton.addEventListener('click',(event) => {
        if (strictButton.onClick == true) {
            strict = true;
        } else {
            strict = false;
        }
})

onButton.addEventListener('click', (event) =>{
    if (onButton.onclick == true) {
        on = true;
        turnConter.innerHTML = "0"; 
    } else {
        on = false;
        turnConter.innerHTML = "";
    }
})