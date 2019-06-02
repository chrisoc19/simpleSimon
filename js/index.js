let order = [];
let playerOrder = [];
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

strictButton.addEventListener('click', (event) => {
    if (strictButton.onClick == true) {
        strict = true;
    }
    else {
        strict = false;
    }
});

onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
        on = true;
        turnCounter.innerHTML = "-";
    }
    else {
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalid);
    }
});

startButton.addEventListener('click', (event) => {
    
  if (on || win) {
      console.log("play")
    play();
  }
});

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalid = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;

    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    
    intervalid = setInterval(gameTurn, 800);
}

function gameTurn(){
    on = false;
    
    if (flash == turn){
        clearInterval(intervalid);
        compTurn = false;
        clearColor();
        on = true;
    }
    
    if (compTurn) {
        clearColor();
        setTimeout(() =>{
           if(order[flash == 1]) one();
           if(order[flash == 2]) two(); 
           if(order[flash == 3]) three(); 
           if(order[flash == 4]) four(); 
           flash++;
        }, 200);
    }
}

function one(){
    
    if (noise){
        let audio = document.getElementById("clip1");
        audio.play();
    }
    noise = true;
    green.style.background = "lightgreen";
}

function two(){
    if (noise){
        let audio = document.getElementById("clip2");
        audio.play();
    }
    noise = true;
    red.style.background = "tomato";
}

function three(){
    if (noise){
        let audio = document.getElementById("clip3");
        audio.play();
    }
    noise = true;
    blue.style.background = "lightskyblue";
}

function four(){
    if (noise){
        let audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    yellow.style.background = "yellow";
}

function clearColor () {
    green.style.background = "darkgreen";
    red.style.background = "darkred";
    blue.style.background = "darkblue";
    yellow.style.background = "goldenrod";
}

