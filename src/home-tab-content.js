import icon from './taco-icon.svg';

function createHomeDiv(className) {
    const mainBox = document.createElement('div');
    const innerBox = document.createElement('div');
    const title = document.createElement('h2');
    const tacoIcon = new Image();

    tacoIcon.src = icon;
    
    mainBox.setAttribute('class', className);
    innerBox.setAttribute('class', 'inner-box');
    tacoIcon.setAttribute('class', 'taco-icon');
    title.innerHTML = 'Taco ‘Bout It';
    innerBox.appendChild(tacoIcon);
    innerBox.appendChild(title);
    innerBox.appendChild(tacoIcon);
    mainBox.appendChild(innerBox);

    return mainBox;
}

export { createHomeDiv };