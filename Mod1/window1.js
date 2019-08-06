"use strict"

let googleBtn = document.getElementById("googleBtn");

googleBtn.onclick = function() {
    window.open("https://www.google.com");
}


let htfdBtn = document.getElementById("htfdBtn");

htfdBtn.onclick = function() {
    window.open("https://www.thehartford.com");
}


let w3Btn = document.getElementById("w3Btn");

w3Btn.onclick = function() {
    window.open("https://www.w3schools.com");
}


let htfdBtnPop = document.getElementById("htfdBtnPop");

htfdBtnPop.onclick = function() {
    let params = "height=600,width=400,right=30,top=40";
    window.open("https://www.thehartford.com", "Hartford", params);
}

let w3BtnPop = document.getElementById("w3BtnPop");

w3BtnPop.onclick = function() {
    let params = "height=600,width=400,left=50,top=50";
    window.open("https://www.w3schools.com", "w3", params);
}

let langPop = document.getElementById("langPop");

langPop.onclick = function() {
    alert("Language Of The Browser: " + navigator.language);
}

let helloAlert = document.getElementById("helloAlert");

helloAlert.onclick = function() {
    if (navigator.language == "en") {
        alert("Hello World!");
    } else if (navigator.language == "es") {
        alert("Hola Mundo!");
    } else if (navigator.language == "de") {
        alert("Hallo Welt");
    } else {
        alert("Hello World")
    }
}