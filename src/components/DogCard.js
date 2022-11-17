'use strict';

import { allDogData, main } from '../index.js';

//section tag created to hold all dog cards
const section = document.createElement('section');
section.className = 'dog-cards-section';
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

        if(dogImage.height < dogImage.width){
            dogImage.style.minHeight = '100%';
        } else if (dogImage.height > dogImage.width){
            dogImage.style.minWidth = '100%';
        };

        console.dir(dogImage);

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

//turn allDogData object into an array to loop through by index.
const allDogDataList = Object.entries(allDogData);

//track number of dog cards displayed
let numDisplayed = 0;
let setNum = 10;

const replaceLoadMoreButton = () => {
    //remove loadButton when
    if (numDisplayed === allDogDataList.length -1){
        main.removeChild(loadMoreButton);
        const allResultsText = document.createElement('p');
        allResultsText.innerText = "All results loaded";
        main.appendChild(allResultsText);
    };
};

const dogCardInstance = (setNum) => {
    for (let i = numDisplayed; i < (setNum); i++) {
        //create and add dogCards to DOM
        let dogCard = document.createElement('dog-card');
        dogCard.setAttribute('class', 'dog-card');
        dogCard.breed = allDogDataList[numDisplayed][0];
        dogCard.imgSrc = allDogDataList[numDisplayed][1];
        numDisplayed++;
        section.appendChild(dogCard);
    };
    replaceLoadMoreButton();
};

const initialCardLoad = () => {
    dogCardInstance(setNum);
    const loadingInfo = document.getElementById('loading-text');
    main.removeChild(loadingInfo);
};

initialCardLoad();

const loadMoreButton = document.getElementById('button');

loadMoreButton.addEventListener('click', () => {
    //onClick loads more than the initial amount
    const newSetNum = 15;
    setNum = setNum + newSetNum;
    
    //check for end of results
    if (setNum > allDogDataList.length - 1){
        setNum = allDogDataList.length - 1;
    };
    dogCardInstance(setNum);
});