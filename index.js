let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {

    let figther1 = fighters[getRandomNumber()]
    let figther2 = fighters[getRandomNumber()]
    
    stageEl.textContent = figther1 + " vs " + figther2 
    
})

function getRandomNumber() {
    return Math.floor(Math.random() * fighters.length)
}

console.log(getRandomNumber())