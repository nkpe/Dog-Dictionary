'use strict';

console.log("index.js working");

const main = document.getElementById('main');

let getDogBreeds = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => {
        const dogBreedsData = res.json();
        return dogBreedsData
    })
    .then(dogBreedsData => {
        const dogBreeds = Object.getOwnPropertyNames(dogBreedsData.message);
        console.log(dogBreeds);
    })
}

getDogBreeds();