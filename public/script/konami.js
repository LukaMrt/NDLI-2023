import {score} from "./variables.js";

// const konamiCodePattern = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const konamiCodePattern = [38, 38, 40, 40]
const konami = [];
let lastKeyTime = 0;

const konamiCodeAction = function () {
    const scoreBarIn = document.querySelector('.score-bar-in');
    let scoreBarInHeight = score;
    const interval = setInterval(function () {
        scoreBarInHeight++;
        scoreBarIn.style.height = scoreBarInHeight + '%';
        if (scoreBarInHeight >= 100) {
            clearInterval(interval);
        }
    }, 50);

}

export function setUpKonamiCode() {
    document.addEventListener('keydown', function (e) {
        konami.push(e.keyCode);

        if (konamiCodePattern[konami.length - 1] !== e.keyCode || lastKeyTime !== 0 && new Date().getTime() - lastKeyTime > 2000) {
            konami.length = 0;
            if (e.keyCode === 38) {
                konami.push(e.keyCode);
            }
        }

        lastKeyTime = new Date().getTime();

        if (konami.length === konamiCodePattern.length) {
            konamiCodeAction();
            konami.length = 0;
        }
    });
}