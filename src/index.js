'use strict';

console.log("index.js working");

const main = document.getElementById('main');

// Get Data from API
async function getDogBreeds() {

    let allDogs = {};

    let dogData = fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => {
            let data = res.json();
            return data;
        });

    // await dog breeds from first API
    const dogBreedsData = await dogData;
    console.log(dogBreedsData);
    const dogBreeds = Object.getOwnPropertyNames(dogBreedsData.message);
    
    //using dog breeds, get breed image from second API

    for (let i=0; i< dogBreeds.length; i++) {
        let breed = dogBreeds[i];

        let getDogPictureData = fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => {
            let imageData = res.json();
            return imageData
        });

        let dogPicture = await getDogPictureData;
        allDogs[breed] = dogPicture.message[0];
    };

    console.log(allDogs);

    // console.log(dogData);
};

getDogBreeds();