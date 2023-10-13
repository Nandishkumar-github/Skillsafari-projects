const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEle = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEle.innerHTML = `${minutes} : ${seconds}`;
    time--;
}