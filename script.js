`use strict`;

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function incOneHome() {
  homeScore.textContent++;
}
function incTwoHome() {
  homeScore.textContent = Number(homeScore.textContent) + 2;
}
function incThreeHome() {
  homeScore.textContent = Number(homeScore.textContent) + 3;
}
function decOneHome() {
  homeScore.textContent--;
}

function incOneGuest() {
  guestScore.textContent++;
}
function incTwoGuest() {
  guestScore.textContent = Number(guestScore.textContent) + 2;
}
function incThreeGuest() {
  guestScore.textContent = Number(guestScore.textContent) + 3;
}
function decOneGuest() {
  guestScore.textContent--;
}

function resetGame() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
