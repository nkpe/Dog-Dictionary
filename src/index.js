'use strict';

console.log("index.js working");

const main = document.getElementById('main');

let getDogBreeds = () => {
    // empty object to store all dog breeds and matching image
    let allDogs = {};

    // get dog breeds from first API
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => {
            const dogBreedsData = response.json();
            return dogBreedsData
        })

        //using dog breeds, get relevant image from second API
        .then(dogBreedsData => {    
            const dogBreeds = Object.getOwnPropertyNames(dogBreedsData.message);
            for (let breed of dogBreeds) {
                fetch(`https://dog.ceo/api/breed/${breed}/images`)
                    .then(res => {
                        let breedPictures = res.json();
                        return breedPictures
                    }).then(breedPictures => {
                        let breedPicture = breedPictures.message[0];
                        return allDogs[breed] = breedPicture;
                    });
            }
        console.log("allDogs object" , allDogs) 
        })
};

getDogBreeds();