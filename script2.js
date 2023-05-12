// Alles ophalen in HTML
let titleText = document.getElementById("title");
let footerText = document.getElementById("footer");
let container = document.getElementById("container");

// Nieuwe elementen aanmaken
let title = document.createElement("h2");
let buttonsContainer = document.createElement("div");
let send = document.createElement("button");
let grootstePartij = document.createElement("h3");
let result = document.createElement("h3");

// De partijen
let partijen = ["CDA", "VVD", "PvdA", "D66", "Volt", "SP", "PVV", "ChristenUnie", "50Plus", "SGP", "GroenLinks", "FvD"];
let partijenObject = [];

// Text wijzigen in de body
title.innerText = "Kies hier uw partij";
titleText.innerText = "De Stemwijzer";
result.innerText = "Uitslag van het aantal stemmen";
footerText.innerText = "\u00A9 2023 - Kevin Xiu";
container.appendChild(title);

// Partijen in object doen
for (let x of partijen){
    partijenObject.push({id: x, value: 0});
}

// Maakt alle buttons aan
for (let partij of partijenObject){
    let button = document.createElement("button");
    button.innerText = partij.id;
    buttonsContainer.appendChild(button);
    
    // Als er op de button geklikt wordt
    button.addEventListener("click", function(){
        partij.value++;
        console.log(partij.id, partij.value);
    });
}

container.appendChild(buttonsContainer);

// Stemmen Tellen
send.classList.add("send");
send.innerText = "Stemmen Tellen";
buttonsContainer.appendChild(send);

send.addEventListener("click", function(){
    let maxStem = 0;
    let partijenMetMeesteStemmen = [];
    const buttons = document.querySelectorAll('button');
    
    // Op scherm tonen
    for (let partij of partijenObject){
        if (partij.value > 0){
            let text = document.createElement("div");
            text.innerHTML = `${partij.value} stemmen voor ${partij.id}`;
            container.appendChild(text);
        }
    }

    // Zoekt naar de meeste stemmen
    for (let partij of partijenObject){
        if (partij.value > maxStem){
            maxStem = partij.value;
        }   
    }

    // Zoekt naar partijen met de meeste stemmen
    for (let partij of partijenObject){
        if (partij.value === maxStem){
            partijenMetMeesteStemmen.push(partij.id);
        }
    }

    grootstePartij.innerText = `Partij met de meeste stemmen: ${partijenMetMeesteStemmen.join(', ')}`;

    // Alle buttons deleten
    while (buttonsContainer.firstChild) {
        buttonsContainer.removeChild(buttonsContainer.firstChild);
    }

    container.appendChild(grootstePartij);

});