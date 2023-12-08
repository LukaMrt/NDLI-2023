function popup() {
    document.getElementById('popup').style.animation = '1.25s fondu both';
    document.getElementById('popup').style.display = 'flex';
}

function theme(theme) {
    switch (theme) {
        case "classique":
            document.documentElement.style.setProperty('--background-color', '#1C6A00');
            document.documentElement.style.setProperty('--background-question', '#B4B4B4');
            document.documentElement.style.setProperty('--background-other', '#D9D9D9');
            document.documentElement.style.setProperty('--background-thermo', '#D3D3D3');
            document.documentElement.style.setProperty('--background-thermo-color', '#821010');
            document.documentElement.style.setProperty('--skip-color', '#D9D9D9');
            document.documentElement.style.setProperty('--text-color', 'black');
            document.getElementById('pile').src = '../images/THEME_1.svg';
            break;
        case "neige":
            document.documentElement.style.setProperty('--background-color', '#fafbfd');
            document.documentElement.style.setProperty('--background-question', '#3286AA');
            document.documentElement.style.setProperty('--background-other', '#91BBD1');
            document.documentElement.style.setProperty('--background-thermo', '#3286AA');
            document.documentElement.style.setProperty('--background-thermo-color', '#821010');
            document.documentElement.style.setProperty('--skip-color', '#91BBD1');
            document.documentElement.style.setProperty('--text-color', '#00356A');
            document.getElementById('pile').src = '../images/THEME_2.svg';
            break;
        case "princesse":
            document.documentElement.style.setProperty('--background-color', '#FD8CFF');
            document.documentElement.style.setProperty('--background-question', '#B240E8');
            document.documentElement.style.setProperty('--background-other', '#D191A8');
            document.documentElement.style.setProperty('--background-thermo', '#AD7FBD');
            document.documentElement.style.setProperty('--background-thermo-color', '#671369');
            document.documentElement.style.setProperty('--skip-color', '#FAC1FF');
            document.documentElement.style.setProperty('--text-color', '#00356A');
            document.getElementById('pile').src = '../images/THEME_3.svg';
            break;
    }
    document.getElementById("popup").style.display = 'none';
}