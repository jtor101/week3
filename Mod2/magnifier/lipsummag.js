"use strict"

window.onload = function() {
    let pTags = document.querySelectorAll("p");
    let pLength = pTags.length;

    let btnMag = document.getElementById("btnMag");
    btnMag.onclick = function() {
        for (let i = 0; i < pLength; i++) {
            let para = pTags[i];

            if (para.style.fontSize == "") {
                para.style.fontSize = 1.0 + "em"
            }

            let size = parseFloat(para.style.fontSize);
            size = size * 1.2;
            para.style.fontSize = size + "em";
        }
    }

    let btnMin = document.getElementById("btnMin");
    btnMin.onclick = function() {
        for (let i = 0; i < pLength; i++) {
            let para = pTags[i];

            if (para.style.fontSize == "") {
                para.style.fontSize = 1.0 + "em"
            }

            let size = parseFloat(para.style.fontSize);
            size = size * 0.8;
            para.style.fontSize = size + "em";
        }
    }







}