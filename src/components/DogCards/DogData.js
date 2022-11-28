'use strict';

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

        //not all breeds return an image, so below filters these out
        if (allBreedImages[pictureNum] === undefined) {
            continue
        };

        allDogs[breed] = allBreedImages[pictureNum];
    };
    return allDogs;
};

let allDogData = await DogData();

//turn allDogData object into an array to loop through by index.
const allDogDataList = Object.entries(allDogData);

export { allDogDataList };