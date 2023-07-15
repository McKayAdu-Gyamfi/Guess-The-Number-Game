let displayText = document.getElementById('display');
let play = document.getElementById('play');
let restart = document.getElementById('restart');
let guessBox = document.getElementById('guessBox')
let random = Math.floor(Math.random() * 100)

console.log(random);

function guessTheNumber(event) {
    event.preventDefault()
    console.log(event)
    let input = document.getElementById("input").value
    input = parseInt(input) //convert a string to a number


    if (input === random){
        displayText.innerText = "Hurrayyy!! You're a winner..." + " " + random
        console.log("hurray");
        guessBox.style.backgroundColor = "green"
        displayText.style.color = "yellow"
    }

    else if (input > random && input > 100){
            displayText.textContent = "Abaaaa, wo pri, guess between 1 - 100..."
            console.log("...");
            guessBox.style.backgroundColor = "orange"
            displayText.style.color = "crimson"
        }

    else if (input > random){
        displayText.textContent = "Too high, go lower..."
        console.log("...");
        guessBox.style.backgroundColor = "red"
        displayText.style.color = "white"
    }

    else if (input < random && input < 1){
        displayText.textContent = "'Ehh' Living legend, guess between 1 - 100"
        console.log("...");
        guessBox.style.backgroundColor = "grey"
        displayText.style.color = "purple"
    }
    
    else if (input < random){
        displayText.textContent = "Too low, go higher..."
        console.log("...");
        guessBox.style.backgroundColor = "yellow"
        displayText.style.color = "white"
    }



}

restart.addEventListener("click", function(e){
   e.preventDefault()
    location.reload()

})