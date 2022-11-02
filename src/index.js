'use strict';

console.log("index.js working");

const main = document.getElementById('main');

let getDogBreeds = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => {
            const dogBreedsData = response.json();
            return dogBreedsData
        })
        .then(dogBreedsData => {
            const dogBreeds = Object.getOwnPropertyNames(dogBreedsData.message);
            for (let breed of dogBreeds) {
                fetch(`https://dog.ceo/api/breed/${breed}/images`)
                    .then(res => {
                        let breedPictures = res.json();
                        return breedPictures
                    }).then(breedPictures => {
                        let breedPicture = breedPictures.message[0];
                        return breedPicture
                    });
                    //assign breed key to breedPicture
            }
        })
}

getDogBreeds();