import './style.css'
import { createHomeDiv } from './home-tab-content';
import { createAboutDiv } from './about-tab-content';
import fbIcon from './fb-icon.svg';
import instaIcon from './instagram-icon.svg';
import twitterIcon from './twitter-icon.svg';


function createHeader(className) {
    const element = document.createElement('header');
    element.setAttribute('class', className);
    return element;
}

function createHeaderTab(textContent, className) {
    const element = document.createElement('button');
    element.innerHTML = textContent;
    element.setAttribute('class', className);

    return element;
}

function createFooter(className) {
    const element = document.createElement('footer');
    const locations = document.createElement('a');
    const contact = document.createElement('a');
    const catering = document.createElement('a');
    const espanol = document.createElement('a');
    const insta = document.createElement('img');
    const facebook = document.createElement('img');
    const twitter = document.createElement('img');

    locations.setAttribute('class', 'locations');
    contact.setAttribute('class', 'contact');
    catering.setAttribute('class', 'catering');
    espanol.setAttribute('class', 'espanol');
    insta.setAttribute('class', 'instagram');
    facebook.setAttribute('class', 'facebook');
    twitter.setAttribute('class', 'twitter');

    locations.innerHTML = 'LOCATIONS';
    contact.innerHTML = 'CONTACT';
    catering.innerHTML = 'CATERING';
    espanol.innerHTML = 'ESPAÑOL';
    facebook.setAttribute('src', fbIcon);
    insta.setAttribute('src', instaIcon);
    twitter.setAttribute('src', twitterIcon);

    element.appendChild(locations);
    element.appendChild(contact);
    element.appendChild(catering);
    element.appendChild(espanol);
    element.appendChild(insta);
    element.appendChild(facebook);
    element.appendChild(twitter);
    

    
    element.setAttribute('class', className);


    return element;
}

function clearMainBox() {
    let element = document.getElementsByClassName('main-box');
    element[0].remove();
}


let content = document.getElementById('content');
content.appendChild(createHeader('header'));

let header = document.getElementsByClassName('header');
header[0].appendChild(createHeaderTab('Home', 'home'));
header[0].appendChild(createHeaderTab('About', 'about'));
header[0].appendChild(createHeaderTab('Menu', 'menu'));

content.appendChild(createHomeDiv('home-box'));
content.appendChild(createFooter('footer'));

let homeTab = document.getElementsByClassName('home');
let aboutTab = document.getElementsByClassName('about');
let menuTab = document.getElementsByClassName('menu');

homeTab[0].addEventListener('click', function () {
    let current = document.getElementsByClassName('main-box');
    let classNames = current[0].getAttribute('class');

    // doesnt work, gotta use substring to split the class names
    if(classNames == 'home-box'){
        return;
    }
    content.replaceChild(createHomeDiv('home-box'),current[0]);
});

aboutTab[0].addEventListener('click', function () {
    let current = document.getElementsByClassName('main-box');
    let classNames = current[0].getAttribute('class');
    if(classNames == 'home-box'){
        return;
    }
    content.replaceChild(createAboutDiv('about-box'),current[0]);
});




