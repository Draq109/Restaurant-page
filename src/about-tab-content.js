function createAboutDiv(className) {
    const mainBox = document.createElement('div');
    const innerBox = document.createElement('div');
    const paragraph = document.createElement('p');
    mainBox.setAttribute('class', className + ' main-box');
    innerBox.setAttribute('class', 'inner-box');
    paragraph.innerHTML = 'Sirloin, chicken, bistek, shrimp, barbacoa, pork adobado, you name it! \nTaco \'Bout it consists of over 20 locations in 11 cities, with more to come.';
    innerBox.appendChild(paragraph);

    mainBox.appendChild(innerBox);

    return mainBox;
}

export { createAboutDiv };