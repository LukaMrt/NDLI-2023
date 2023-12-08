export let score = 0;

export function addToScore(value) {
    score += value;
    const scoreBarIn = document.querySelector('.score-bar-in');
    scoreBarIn.style.height = score + '%';
}
