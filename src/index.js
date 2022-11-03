'use strict';

const main = document.getElementById('main');

window.addEventListener('load', () => {
    let loading = document.createElement('p');
    loading.innerText = 'Loading...';
    loading.setAttribute('class', 'loading-text');
    main.appendChild(loading);
});

async function DogData() {

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
    for (let i = 0; i < dogBreeds.length; i++) {
        let breed = dogBreeds[i];

        let getDogPictureData = fetch(`https://dog.ceo/api/breed/${breed}/images`)
            .then(response => {
                let imageData = response.json();
                return imageData
            });

        let allBreedImagesResult = await getDogPictureData;

        let pictureNum = 1;
        let allBreedImages = allBreedImagesResult.message;

        //not all breeds return an image, so below will filter these out
        if (allBreedImages[pictureNum] === undefined) {
            console.log(breed, " is undefined");
            continue
        };

        allDogs[breed] = allBreedImages[pictureNum];

        // getDogPicture(allBreedImagesResult, allDogs, breed);
    };
    return allDogs;
};

let allDogData = await DogData();

export { allDogData , main };