"use strict";
const hourhand = document.querySelector(".hour");
const minutehand = document.querySelector(".minute");
const secondhand = document.querySelector(".second");

console.log(hourhand);

let tick = function() {
    let curdate = new Date();
    let curhour = curdate.getHours();
    let curminute = curdate.getMinutes();
    let cursecond = curdate.getSeconds();
    hourhand.textContent = curhour;
    minutehand.textContent = curminute;
    secondhand.textContent = cursecond;
};

setInterval(tick, 1000);