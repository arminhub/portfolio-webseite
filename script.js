// Selektoren
const menu = document.querySelector('.hamburger-menu');

// zeigeMenu() zeigt das mobile-menu
const zeigeMenu = function () {
    console.log('zeigeMenu() ok');

    let menuImg = document.querySelector('.hamburger-menu img');
    let svgSrc = menuImg.src.split('/');
    let svg = `${svgSrc[svgSrc.length - 2]}/${svgSrc[svgSrc.length - 1]}`
    console.log(svg);

    if (svg == 'images/menu.svg') {
        menuImg.setAttribute('src', 'images/close.svg');
        document.querySelector('.mobile').classList.add('show');
    } else {
        menuImg.setAttribute('src', 'images/menu.svg');
        document.querySelector('.mobile').classList.remove('show');
    }
}

// Eventlistener
menu.addEventListener('click', zeigeMenu);
