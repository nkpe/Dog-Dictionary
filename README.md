# Dog-Dictionary
Dictionary of Dog breeds (data source: https://dog.ceo/dog-api/)
## How to run and view it
* GitHub Pages - The website has been deployed to GitHub Pages and can be viewed [here](https://nkpe.github.io/Dog-Dictionary/)
* Run Locally 
    1. Install node.js using ```npm install http-server -g``` in the command line
    2. Inside the Dog-Dictionary folder, run ```run http-server -p 3000``` in the command line
    3. To view - in Chrome or Firefox go to `http://localhost:3000/` .
## Testing
* Browser compatibility - DogCard web component does not render in Safari browser. Website works well in Chrome, Firefox and Edge
* Responsiveness - Works well on mobile and desktop. Tablet breakpoint to be implemented
* Initial load time - currently initial load time is not optimised, so can be slow. However, this does mean that the results are loaded quicker when the 'load more' button is clicked.
## Features to implement

* Safari compatibility:
    * to ensure the web component renders. 
* Center images:
    * as each image is different in size, not all dogs may be showing. Centred images will have a higher chance of showing the dog.
* Dog image popup: 
    * on hover &/or click the full dog image pops up over the page, with button to close it.  
* Format breed names:
    * capitalise each breed and split name if necessary.
* Random button
    * generate one dog breed/dog card
* Different images: 
    * either a button/refresh can call another set of images. 
* New pages: 
    * Information on each breed.

## Credits
### Assets 

* Favicon & Logo - [favicon.io](https://favicon.io/emoji-favicons/dog-face/)
* API data - [Dog API](https://dog.ceo/dog-api/). Source of breed information and images.

