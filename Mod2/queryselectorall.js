"use strict"

window.onload = function() {
    let submitBtn = document.getElementById("submitBtn");
    let output = document.querySelectorAll("input");

    submitBtn.onclick = function() {
        let outputArray = Array.from(output);
        let name = outputArray[0].value;
        let address = outputArray[1].value;
        let city = outputArray[2].value;

        alert("Name: " + name + "\n" +
            "Address: " + address + "\n" +
            "City: " + city);



    }
}