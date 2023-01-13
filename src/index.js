import './style.css'

function createHeader(className) {
    const element = document.createElement('header');
    element.setAttribute('class', className);
    return element;
}

function createHeaderTab(textContent, className) {
    const element = document.createElement('h1');
    element.innerHTML = textContent;
    element.setAttribute('class', className);

    return element;
}

let content = document.getElementById('content');
content.appendChild(createHeader('header'));

let header = document.getElementsByClassName('header');
header[0].appendChild(createHeaderTab('Home', 'home'));
header[0].appendChild(createHeaderTab('Menu', 'menu'));
header[0].appendChild(createHeaderTab('Contact', 'contact'));




