// Alles ophalen in HTML
let titleText = document.getElementById("title");
let footerText = document.getElementById("footer");
let container = document.getElementById("container");

// Nieuwe elementen aanmaken
let title = document.createElement("h2");
let buttonsContainer = document.createElement("div");
let send = document.createElement("button");
let biggestFaction = document.createElement("h3");
let result = document.createElement("h3");

buttonsContainer.classList.add("buttonsContainer");

// De partijen
let partijen = ["CDA", "VVD", "PvdA", "D66", "Volt", "SP", "PVV", "ChristenUnie", "50Plus", "SGP", "GroenLinks", "FvD"];

// Text wijzigen in de body

title.innerText = "Kies hier uw partij";
titleText.innerText = "De Stemwijzer";
result.innerText = "Uitslag van het aantal stemmen";
footerText.innerText = "\u00A9 2023 - Kevin Xiu";
container.appendChild(title);

// Maakt alle buttons aan
for (let i = 0; i < partijen.length; i++){
    let button = document.createElement("button");
    button.innerText = partijen[i];
    buttonsContainer.appendChild(button);
}

container.appendChild(buttonsContainer);

// Als er op de button geklikt wordt
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        buttons[i].value++
        console.log(buttons[i].value);
    })
}

// De stemmen teller
send.classList.add("send");
send.innerText = "Stemmen Tellen";
buttonsContainer.appendChild(send);

let highestValue = 0;
let highestValueButtons = [];

send.addEventListener("click", function(){
    console.log("Geteld!");

    container.appendChild(result);

    for (let i = 0; i < buttons.length; i++){
        console.log(buttons[i].innerText)
        if (buttons[i].value > 0){
            let text = document.createElement("div");
            text.innerHTML = `${buttons[i].value} stemmen voor ${buttons[i].innerText}`;
            container.appendChild(text);
        }

        if (buttons[i].value > highestValue){
            highestValue = buttons[i].value;
            highestValueButtons.push(buttons[i].innerText);
            if (highestValueButtons.length > 1){
                highestValueButtons.shift();
            }
        } else if (buttons[i].value === highestValue){
            highestValueButtons.push(buttons[i].innerText);
        }
    }
    
    console.log(highestValueButtons);

    biggestFaction.innerHTML = `Partij met de meeste stemmen: `

    if (highestValueButtons.length > 1){
        let faction = "";
        for (i = 0; i < highestValueButtons.length; i++){
            console.log(highestValueButtons[i]);
            faction += `${highestValueButtons[i]}, `;
        }
        biggestFaction.innerHTML += faction.slice(0, -2);
    } else{
        for (i = 0; i < highestValueButtons.length; i++){
            console.log(highestValueButtons[i]);
            biggestFaction.innerHTML += highestValueButtons[i];
        }
    }

    container.appendChild(biggestFaction);
    
    while (buttonsContainer.firstChild) {
        buttonsContainer.removeChild(buttonsContainer.firstChild);
    }


})