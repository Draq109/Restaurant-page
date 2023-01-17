import menuJpg from './menu.jpg';

function createMenuDiv(className) {
    const mainBox = document.createElement('div');
    const innerBox = document.createElement('div');
    const menu = document.createElement('img');
    mainBox.setAttribute('class', className + ' main-box');
    innerBox.setAttribute('class', 'inner-box');
    menu.setAttribute('src', menuJpg);
    innerBox.appendChild(menu);
    mainBox.appendChild(innerBox);

    return mainBox;
}

export { createMenuDiv };