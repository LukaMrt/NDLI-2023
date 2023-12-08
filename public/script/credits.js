const creditsCodes = [67, 82, 51, 68, 49, 84, 83];
const creditsEntered = [];
let lastKeyTime = 0;

const creditsCodeAction = function () {
    const body = document.querySelector('body');
    body.innerHTML = '';
    const img = document.createElement('img');
    img.style.width = '100vw';
    img.style.height = '100vh';
    img.src = 'public/images/first-easter-egg.png';
    body.appendChild(img);
}

export function setUpCreditsCode() {
    document.addEventListener('keydown', function (e) {
        creditsEntered.push(e.keyCode);

        if (creditsCodes[creditsEntered.length - 1] !== e.keyCode || lastKeyTime !== 0 && new Date().getTime() - lastKeyTime > 2000) {
            creditsEntered.length = 0;
            if (e.keyCode === 67) {
                creditsEntered.push(e.keyCode);
            }
        }

        lastKeyTime = new Date().getTime();

        if (creditsEntered.length === creditsCodes.length) {
            creditsCodeAction();
            creditsEntered.length = 0;
        }
    });
}
