"use strict"

window.onload = function() {
    const allDivs = document.getElementsByClassName("imageGroup");

    let len = allDivs.length;
    for (let i = 0; i < len; i++) {
        allDivs[i].style.border = "5px solid red";
    }
}