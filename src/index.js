'use strict';

const main = document.getElementById('main');

window.addEventListener('load', () => {
    let loading = document.createElement('p');
    loading.innerText = 'Loading...';
    loading.setAttribute('id', 'loading-text');
    main.prepend(loading);
});

export { main }