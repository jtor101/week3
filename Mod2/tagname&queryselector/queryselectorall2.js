"use strict"

window.onload = function() {
    let alts = document.querySelectorAll("img");
    let altArray = Array.from(alts);
    let altLength = alts.length;
    let i = 0;

    for (i = 0; i < altLength; i++) {
        if (alts[i].hasAttribute("alt") == false) {
            alts[i].setAttribute("alt", "Graffiti Image");
        }
        console.log(alts[i]);
    }
}