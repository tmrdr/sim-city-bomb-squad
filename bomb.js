console.log("javascript running");

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
});

var count = 30;

function display() {
    var clock = document.getElementById("clock");
    clock.textContent = count;
};


var timeLeft = function() {
    console.log(count--);
    display();
    if (count <= 0) {
        count = 0
    }
};

setTimeout(function() {
    console.log("time's up");
    clearInterval(timer);
}, 31000);

var timer = setInterval(timeLeft, 1000);


// wire cutting //

var blue = document.getElementById("blue").addEventListener("click", function() {
    console.log("blue wire cut");
    var blue = document.getElementById("blue");
    blue.classList.remove("bw");
    blue.classList.add("bc");
});
var green = document.getElementById("green").addEventListener("click", function() {
    console.log("green wire cut");
    var green = document.getElementById("green");
    green.classList.remove("gw");
    green.classList.add("gc");
});
var red = document.getElementById("red").addEventListener("click", function() {
    console.log("red wire cut");
    var red = document.getElementById("red");
    red.classList.remove("rw");
    red.classList.add("rc");
});
var white = document.getElementById("white").addEventListener("click", function() {
  console.log("blue wire cut");
  var white = document.getElementById("white");
  white.classList.remove("ww");
  white.classList.add("wc");
});
var yellow = document.getElementById("yellow").addEventListener("click", function() {
  console.log("yellow wire cut");
  var yellow = document.getElementById("yellow");
  yellow.classList.remove("yw");
  yellow.classList.add("yc");
});
