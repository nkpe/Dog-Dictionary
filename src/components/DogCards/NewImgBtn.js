'use strict';

const shuffleImg = 'src/images/shuffle_icon.png';
class DogCardBtn extends HTMLElement {
    connectedCallback () {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        const shuffleImgEl = document.createElement('img');
        shuffleImgEl.src = shuffleImg;
        button.appendChild(shuffleImgEl);
    };
};

export { DogCardBtn };