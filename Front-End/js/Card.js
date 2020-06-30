'use strict';

class Card {
    constructor(name, parentSelector, header, imgURL, text, data, index) {
        this.name = name;
        this.parent = parentSelector;
        this.header = header;
        this.imgURL = imgURL;
        this.text = text;
        this.data = data;
        this.index = index;
    }

    initialize() {
        const newCard = document.createElement(this.name); //Creating Card
        newCard.setAttribute('class', 'shadow-lg p-3 mb-5 card text-white bg-dark mb-3');
        newCard.style = 'width: 18rem; height: 25rem; float: left; margin-left: 75px; margin-top: 50px';
        
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
        
        const cardText = document.createElement('p'); //Creating Card Text
        cardText.setAttribute('class', 'card-text');
        cardText. textContent = this.text;
        cardBody.appendChild(cardText);
        
        const infoButton = document.createElement('button');
        infoButton.setAttribute('class', 'btn btn-primary');
        infoButton.setAttribute('data-toggle', 'modal');
        infoButton.setAttribute('data-target', '.bd-example-modal-lg');
        infoButton.textContent = 'info';
        cardBody.appendChild(infoButton);

        const addButton = document.createElement('button');
        createButton(addButton, cardBody, 'btn btn-primary', 'right', 'add to Cart',);

        let data = this.data;
        let index = this.index;

        $(addButton).on('click', function () {
            let check = false;
            for(let i = 0; i < selectedProducts.length; i++) {
                if(selectedProducts[i] === data[index]) {
                    check = true;
                }
            }
            if(!check) {
                selectedProducts.push(data[index]);
            }
        });
        
        $(infoButton).on('click', function () {
            const url = data[index].imgURL;
            console.log(url);
            const imageString = 'url(' + url + ')';
            console.log(imageString);
            const information = document.getElementById('information');
            $('#infoHeader').text(data[index].header);
            $('#information').html(data[index].info + '<h5>' + data[index].price + '</h5>');
            $('<div>', {
                css: {
                    width: 400,
                    height: 300,
                    'margin-left': 180,
                    'background': imageString,
                },
            }).appendTo('#information');
            const addButton = document.createElement('button');
            createButton(addButton, information, 'btn btn-primary', 'right', 'add to Cart',);
            $(addButton).on('click', addToList(data, index));
        });
        
        const parent = document.querySelector(this.parent);
        parent.appendChild(newCard);
    }
}