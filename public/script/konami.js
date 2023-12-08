import {addToScore, score} from "./variables.js";

const konamiCodePattern = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// const konamiCodePattern = [38, 38, 40, 40]
const konami = [];
let lastKeyTime = 0;

const konamiCodeAction = function () {
    const scoreBarIn = document.querySelector('.score-bar-in');
    let delta = 1;
    scoreBarIn.style.transition = 'height 0.05s ease-in-out';
    const interval = setInterval(function () {
        addToScore(delta);
        delta += 0.1;
        if (delta > 3) {
            delta = 3;
        }
        if (score >= 130) {
            clearInterval(interval);
            const elementsToHide = document.querySelectorAll('body *:not(#burn-video)');
            elementsToHide.forEach(element => {
                element.style.transition = 'opacity 2s';
                element.style.opacity = '0';
            });
            setTimeout(() => {
                elementsToHide.forEach(element => {
                    element.style.display = 'none';
                });
                // play a video
                const video = document.getElementById('burn-video');
                video.style.display = 'block';
                video.style.opacity = '1';
                video.style.transition = 'opacity 0.5s';
                video.play();
                // Redirect to a page
                setTimeout(() => {
                    window.location.href = '../pages/game-over.html';
                }, 4000);
            }, 1000);
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