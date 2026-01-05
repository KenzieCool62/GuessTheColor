
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


let correctOpt = "A"
let streak = 0
let totalClicks = 0
let totalTime = 0
let avgTime = totalTime / totalClicks

let t0
let t1

function chosen(option) {
    if (t0 == null) {
        t0 = Date.now()
    }
    t1 = Date.now()

    let duration = t1 - t0

    if (option == correctOpt) {
        streak +=1
        document.getElementById("indicator").innerHTML = "Correct!"
        document.getElementById("indicator").style.backgroundColor = "rgb(0, 255, 0)"
    } else {
        streak = 0
        document.getElementById("indicator").innerHTML = "Wrong!"
        document.getElementById("indicator").style.backgroundColor = "rgb(255, 0, 0)"
    }
    
    document.getElementById("A").innerHTML = "a) " + "rgb(" + getRandomInt(1, 255) + ", " + getRandomInt(1, 255) + ", " + getRandomInt(1, 255) + ")"
    document.getElementById("B").innerHTML = "b) " + "rgb(" + getRandomInt(1, 255) + ", " + getRandomInt(1, 255) + ", " + getRandomInt(1, 255) + ")"
    document.getElementById("C").innerHTML = "c) " + "rgb(" + getRandomInt(1, 255) + ", " + getRandomInt(1, 255) + ", " + getRandomInt(1, 255) + ")"
    document.getElementById("D").innerHTML = "d) " + "rgb(" + getRandomInt(1, 255) + ", " + getRandomInt(1, 255) + ", " + getRandomInt(1, 255) + ")"

    let rng = getRandomInt(1000, 10000)

    if (rng >= 1000 && rng <= 2500) {

        correctOpt = "A"
            
    } else if (rng >= 2501 && rng <= 5000) {

        correctOpt = "B"

    } else if (rng >= 5001 && rng <= 7500) {

        correctOpt = "C"

    } else {

        correctOpt = "D"

    }

    t0 = Date.now()

    totalClicks += 1
    totalTime += duration

    let correctColor = "rgb(" + getRandomInt(1, 255) + ", " + getRandomInt(1, 255) + ", " + getRandomInt(1, 255) + ")"

    document.getElementById(correctOpt).innerHTML = correctOpt.toLowerCase() + ") " + correctColor
    document.getElementById("cube").style.fill=correctColor
    document.getElementById("strkLabel").innerHTML = "Streak: " + streak + " || "
    document.getElementById("currentTime").innerHTML = "Time: " + Math.floor(duration / 1000) + "s"
    document.getElementById("avgLabel").innerHTML = "Avg Time: " + Math.floor((totalTime/totalClicks) / 1000) + "s"

}


function reset() {

    streak = 0
    totalClicks = 0
    totalTime = 0

    t0 = null
    t1 = null

    document.getElementById("indicator").innerHTML = "-"
    document.getElementById("indicator").style.backgroundColor = "lightgray"
    document.getElementById("strkLabel").innerHTML = "Streak: " + streak + " || "
    document.getElementById("currentTime").innerHTML = "Time: 0s"
    document.getElementById("avgLabel").innerHTML = "Avg Time: 0s"
    
}


let theme = 1
function switchTheme() {

    if (theme == 1) {
        theme = 2
        document.getElementById("pagestyle").href="darkmode.css"

    } else {
        theme = 1
        document.getElementById("pagestyle").href="lightmode.css"
    }

}