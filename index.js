let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0


function add1Home() {
    homeEl.textContent = homeScore += 1
}

function add2Home() {
     homeEl.textContent = homeScore += 2
}

function add3Home() {
     homeEl.textContent = homeScore += 3
}

function add1Guest() {
    guestEl.textContent = guestScore += 1
}

function add2Guest() {
    guestEl.textContent = guestScore += 2
}

function add3Guest() {
    guestEl.textContent = guestScore += 3
}