'use strict';

console.log("index.js working");

const main = document.getElementById('main');

// Get Data from API
async function getDogBreeds() {

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
    let getDogPictureData = (breed) => {
        fetch(`https://dog.ceo/api/breed/${breed}/images`)
            .then(res => {
                let imageData = res.json();
                return imageData
            });

    for (let breed of dogBreeds) {
        let dogPicture = getDogPictureData(breed);
        console.log("dogPicture", dogPicture);
    };

    // console.log(dogData);

}
};

getDogBreeds();