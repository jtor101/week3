"use strict"

window.onload = function() {
    //Buttons
    let addBtn = document.getElementById("addBtn");
    let clearBtn = document.getElementById("clearBtn");
    addBtn.onclick = add;
    clearBtn.onclick = clear;
    // Array of Files/Descriptions
    let imagesFiles = ["/Mod2/parentchild/imagework1.jpg", "/Mod2/parentchild/imagework2.jpg", "/Mod2/parentchild/imagework3.jpg", "/Mod2/parentchild/imagework4.jpg", "/Mod2/parentchild/imagework5.jpg", "/Mod2/parentchild/imagework6.jpg", "/Mod2/parentchild/imagework7.jpg", "/Mod2/parentchild/imagework8.jpg"];

    let imageDescriptions = ["All Aboard The Mutant Train", "The Spectacular 100th Issue", "Along Came Sabretooth", "Bishop Is Back", "Magneto Triumphant", "Wolverine Lashes Out", "Gambit vs. Wolverine", "Night Of The Demon"];

    // Set parent elements
    let parentDiv = document.getElementById("imageDisplay");
    let selectField = document.getElementById("coverSelect");


    let arrLength = imagesFiles.length;


    for (let i = 0; i < arrLength; i++) {
        let option = document.createElement("option");
        selectField.appendChild(option);

        if (option.hasAttribute("value") == false) {
            option.setAttribute("value", imageDescriptions[i]);
            option.text = imageDescriptions[i];


        }
    }


    function add() {
        let i = document.getElementById("coverSelect").selectedIndex;
        let image = document.createElement("img");
        image.src = imagesFiles[i];

        parentDiv.appendChild(image);
    }

    function clear() {
        parentDiv.innerHTML = "";
    }




}