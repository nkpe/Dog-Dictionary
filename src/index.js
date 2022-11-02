'use strict';

console.log("index.js working");

const main = document.getElementById('main');

// Get Data from API
async function getDogData () {

    //dog breeds and dog image sources to be stored in allDogs object
    let allDogs = {};

    //dogData gets dog breeds from first API
    let dogData = fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => {
            let data = res.json();
            return data;
        });

    // await dog breeds from first API
    const dogBreedsData = await dogData;
    console.log(dogBreedsData);

    //all dog breeds added into an array
    const dogBreeds = Object.getOwnPropertyNames(dogBreedsData.message);
    
    //using dog breeds array, get image by breed from second API
    for (let i=0; i< dogBreeds.length; i++) {
        let breed = dogBreeds[i];

        let getDogPictureData = fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => {
            let imageData = res.json();
            return imageData
        });

        let dogPicture = await getDogPictureData;

        // dog breeds and dog image sources added to object as key-value pairs
        allDogs[breed] = dogPicture.message[0];
    };
};

getDogData();