'use strict';

import { main } from '../../index.js';
import { allDogDataList } from './DogData.js';
import { CardsGroup } from './DogCardPage.js';

const imgSizing = (dogImage) => {
    if(dogImage.height <= dogImage.width){
        dogImage.style.minHeight = '100%';
    } else if (dogImage.height > dogImage.width){
        dogImage.style.minWidth = '100%';
    };
}

// custom HTML Element to show dog information
class DogCard extends HTMLElement {
    constructor(breed, imgSrc) {
        super();
        this.breed = breed;
        this.imgSrc = imgSrc;
    }

    connectedCallback() {
        //wrapper for each card
        const cardWrapper = document.createElement('figure');
        cardWrapper.setAttribute('class', 'card-wrapper');
        this.appendChild(cardWrapper);

        const imgWrapper = document.createElement('span');
        imgWrapper.setAttribute('class', 'img-wrapper');

        //image tag created
        const dogImage = document.createElement('img');
        dogImage.setAttribute('class', 'dog-image');
        dogImage.setAttribute('src', this.imgSrc);
        dogImage.setAttribute('alt', `image of ${this.breed}`);

       imgSizing(dogImage);

        //heading tag for breed name
        const dogBreedName = document.createElement('figcaption');
        dogBreedName.setAttribute('class', 'breed-name');
        dogBreedName.innerText = this.breed;

        cardWrapper.appendChild(imgWrapper);
        imgWrapper.appendChild(dogImage);
        cardWrapper.appendChild(dogBreedName);
    };
};

customElements.define('dog-card', DogCard);

const dogCardInstance = (setNum, section) => {
    console.log("dogCardInstance working");
    for (let i = CardsGroup.numDisplayed; i < (setNum); i++) {
        //create and add dogCards to DOM
        let dogCard = document.createElement('dog-card');
        dogCard.setAttribute('class', 'dog-card');
        dogCard.breed = allDogDataList[CardsGroup.numDisplayed][0];
        dogCard.imgSrc = allDogDataList[CardsGroup.numDisplayed][1];
        CardsGroup.numDisplayed++;
        section.appendChild(dogCard);
    };
};

const initialCardLoad = (section) => {
    console.log("initalCardLoad working");
    dogCardInstance(CardsGroup.setNum, section);
    const loadingInfo = document.getElementById('loading-text');
    main.removeChild(loadingInfo);
};

export { initialCardLoad, dogCardInstance };
