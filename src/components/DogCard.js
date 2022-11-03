'use strict';

import { allDogData, main } from "../index.js";

//section tag created to hold all dog cards
const section = document.createElement("section");
section.className = "dog-cards-section";
main.prepend(section);

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

        //heading tag for breed name
        const dogBreedName = document.createElement('figcaption');
        dogBreedName.setAttribute('class', 'breed-name');
        dogBreedName.innerText = this.breed;

        cardWrapper.appendChild(imgWrapper);
        imgWrapper.appendChild(dogImage);
        cardWrapper.appendChild(dogBreedName);
    }
}

customElements.define('dog-card', DogCard);

let dogCardInstance = (setNum) => {
    //track number of dog cards displayed
    let numDisplayed = 0;

    //turn allDogData object into an array to loop through by index.
    const allDogDataList = Object.entries(allDogData);
    console.log(allDogDataList)

    for (let i = numDisplayed; i < setNum; i++) {
        numDisplayed++;
        console.log(i)
        //create and add dogCards to DOM
        let dogCard = document.createElement('dog-card');
        dogCard.setAttribute('class', 'dog-card')
        dogCard.breed = allDogDataList[numDisplayed][0];
        dogCard.imgSrc = allDogDataList[numDisplayed][1];
        section.appendChild(dogCard);
    };
};

dogCardInstance(10);