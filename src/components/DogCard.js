'use strict';

import { allDogData, main } from "../index.js";

//section tag created to hold all dog cards
const section = document.createElement("section");
section.className = "dog-cards-section";

//shadow DOM initiated to manage dog cards
main.prepend(section);

// custom HTML Element to show dog information
class DogCard extends HTMLDivElement { 
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

        //heading tag for breed name
        const dogBreedName = document.createElement('figcaption');
        dogBreedName.setAttribute('class', 'breed-name');
        dogBreedName.innerText = this.breed;

        cardWrapper.appendChild(imgWrapper);
        imgWrapper.appendChild(dogImage);
        cardWrapper.appendChild(dogBreedName);
    }
}

customElements.define('dog-card', DogCard, {extends: 'div'});

let dogCardInstance = () => {
   for (const breed in allDogData){
    let dogCard = document.createElement('div', {is: 'dog-card'});
    dogCard.setAttribute('class', 'dog-card')
    dogCard.breed = breed;
    dogCard.imgSrc = allDogData[breed];
    section.appendChild(dogCard);
   }
};

dogCardInstance();