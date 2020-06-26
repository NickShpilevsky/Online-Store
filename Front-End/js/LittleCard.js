'use strict';

class LittleCard {
    constructor(parentSelector, header, imgURL, price) {
        this.parent = parentSelector;
        this.header = header;
        this.imgURL = imgURL;
        this.price = price;
    }

    initialize() {
        const newCard = document.createElement('div'); //Creating Card
        newCard.setAttribute('class', 'shadow-lg p-3 mb-5 card text-white bg-dark mb-3');
        newCard.style = 'width: 18rem; height: 20rem; position: absolute; left: 600px; top: 10px';

        const image = document.createElement('img'); //Passing image
        image.setAttribute('src', this.imgURL);
        image.setAttribute('class', 'card-img-top');
        newCard.appendChild(image);

        const cardBody = document.createElement('div'); //Creating Card Body
        cardBody.setAttribute('class', 'card-body');
        newCard.appendChild(cardBody);

        const cardHeader = document.createElement('h5'); //Creating Card Header
        cardHeader.setAttribute('class', 'card-title');
        cardHeader.textContent = this.header;
        cardBody.appendChild(cardHeader);

        const cardText = document.createElement('h3'); //Creating Card Text
        cardText.setAttribute('class', 'card-text');
        cardText. textContent = this.price;
        cardBody.appendChild(cardText);

        const parent = document.querySelector(this.parent);
        parent.appendChild(newCard);
    }
}