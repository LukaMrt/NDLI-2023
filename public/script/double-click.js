export function setUpLukaDoubleclick() {
    const luka = document.querySelector('#luka-btn');
    luka.addEventListener('dblclick', function() {
        const elementsToHide = document.querySelectorAll('body *:not(#luka)');
        elementsToHide.forEach(element => {
            element.style.transition = 'opacity 2s';
            element.style.opacity = '0';
        });
        setTimeout(() => {
            elementsToHide.forEach(element => {
                element.style.display = 'none';
            });
            document.getElementById('luka').classList.remove('hidden');
        }, 2000);
    });
}