"use strict"

window.onload = function() {
    let imageTags = document.querySelectorAll("img");
    let imgArray = Array.from(imageTags);
    let imgLength = imgArray.length;
    let i = 0;

    let imageFiles = ["/Mod2/imagework/imagework1.jpg", "/Mod2//imagework/imagework2.jpg", "/Mod2/imagework/imagework3.jpg"];
    let imageDescr = ["All Aboard The Mutant Train", "The Spectacular 100th Issue", "Along Came Sabretooth"];

    for (i = 0; i < imgLength; i++) {
        if (imgArray[i].hasAttribute("src") == false) {
            imgArray[i].setAttribute("src", imageFiles[i]);
        }

        if (imgArray[i].hasAttribute("alt") == false) {
            imgArray[i].setAttribute("alt", imageDescr[i]);
        }
        if (imgArray[i].className == "") {
            imgArray[i].className = "dynamicImg";
        }
    }



}