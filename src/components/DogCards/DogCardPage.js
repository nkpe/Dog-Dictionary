'use strict';

import { main } from '../../index.js';
import { allDogDataList } from './DogData.js';
import { initialCardLoad, dogCardInstance } from './DogCard.js';
import { DogCardBtn } from './NewImgBtn.js';

//track number of dog cards displayed
let CardsGroup = {
    numDisplayed: 0,
    setNum: 10
}

const replaceLoadMoreButton = (loadMoreButton) => {
    //remove loadButton when
    console.log("replace load more button working")
    if (CardsGroup.numDisplayed === allDogDataList.length - 1) {
        main.removeChild(loadMoreButton);
        const allResultsText = document.createElement('p');
        allResultsText.innerText = "All results loaded";
        main.appendChild(allResultsText);
    };
};


const dogCardPage = () => {
    //section tag created to hold all dog cards
    const section = document.createElement('section');
    section.className = 'dog-cards-section';
    main.prepend(section);

    initialCardLoad(section);

    const loadMoreButton = document.getElementById('button');

    loadMoreButton.addEventListener('click', () => {
        //onClick loads more than the initial amount
        const newSetNum = 15;
        CardsGroup.setNum = CardsGroup.setNum + newSetNum;

        //check for end of results
        if (CardsGroup.setNum > allDogDataList.length - 1) {
            CardsGroup.setNum = allDogDataList.length - 1;
            replaceLoadMoreButton(loadMoreButton);
        };
        dogCardInstance(CardsGroup.setNum, section);
        
    });

    
    customElements.define('dog-card-btn', DogCardBtn);
    // section.appendChild(document.createElement('dog-card-btn'));
}

dogCardPage();

export { CardsGroup }