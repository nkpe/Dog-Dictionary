'use strict';

import { allDogData } from "../index.js";

console.log("DogCard.js working");

const main = document.getElementById('main');

//section tag created to hold all dog cards
const section = document.createElement("section");
section.className = "dog-cards-section";

//shadow DOM initiated to manage dog cards
main.prepend(section);

// custom HTML Element to show dog information
class DogCard extends HTMLElement {
    constructor() {
        super();
        console.log("this",this);
        // //wrapper for each card
        // const cardWrapper = document.createElement('div');
        // cardWrapper.setAttribute("class", "card-wrapper");
        // shadow.appendChild(cardWrapper);

        // //image tag created
        // const dogImage = document.createElement('img');
        // dogImage.setAttribute("class", "dog-image");
        // dogImage.setAttribute("src", '#');
        // dogImage.setAttribute("alt", `image of`);

        // //heading tag for breed name
        // const dogBreedName = document.createElement('figcaption');
        // dogBreedName.setAttribute("class", "breed-name");
        // dogBreedName.innerText = dogBreed;

        // cardWrapper.appendChild(dogImage);
        // cardWrapper.appendChild(dogBreedName);
    }

    connectedCallback() {
        //wrapper for each card
        const cardWrapper = document.createElement('figure');
        cardWrapper.setAttribute("class", "card-wrapper");
        this.appendChild(cardWrapper);

        //image tag created
        const dogImage = document.createElement('img');
        dogImage.setAttribute("class", "dog-image");
        dogImage.setAttribute("src", '#');
        dogImage.setAttribute("alt", `image of`);

        //heading tag for breed name
        const dogBreedName = document.createElement('figcaption');
        dogBreedName.setAttribute("class", "breed-name");
        // dogBreedName.innerText = dogBreed;

        cardWrapper.appendChild(dogImage);
        cardWrapper.appendChild(dogBreedName);
    }
}

customElements.define('dog-card', DogCard);


console.log("DogData from Dogcard.js", allDogData);

let dogCardInstance = () => {
   for (const breed in allDogData){
    let dogCard = document.createElement('dog-card');
    dogCard.dogBreed = breed;
    dogCard.imgSrc = dogCard[breed];
    main.prepend(dogCard);
   }
};

dogCardInstance();