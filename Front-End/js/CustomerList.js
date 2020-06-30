'use strict';

class CustomerList {
    constructor(data) {
        this.data = data;
    }
    initialize() {
        const parent = document.getElementById('customerProducts');

        let data = this.data;

        const topic = document.createElement('div');
        topic.style = 'width: 400px; height: 45px; font-size: 16pt';
        const topicText = document.createTextNode(data.header);
        topic.appendChild(topicText);
        parent.appendChild(topic);

        const deleteButton = document.createElement('button');
        createButton(deleteButton, topic, 'btn btn-danger', 'right', 'remove', '10px');

        $(deleteButton).on('click', () => {deleteTopic(data)});

        const orderButton = document.createElement('button');
        createButton(orderButton, topic, 'btn btn-primary', 'right', 'order');
        
        $(orderButton).on('click', function() {
            $('#customerProducts').html('');
            const title = document.createElement('h3');
            $(title).text('Order ' + data.header);
            $('#customerProducts').html(title);
            
            const nameInput = document.createElement('input');
            createInput(nameInput, parent, 'Enter your name:', 'Name');
            const addressInput = document.createElement('input');
            createInput(addressInput, parent, 'Enter your address', 'Address');
            const cardNumberInput = document.createElement('input');
            createInput(cardNumberInput, parent, 'Enter the number of your card:', 'Card number');
            
            const requestButton = document.createElement('button');
            createButton(requestButton, parent, 'btn btn-success', 'left', 'order');

            $(requestButton).on('click', function() {
                if($(nameInput).val() === '' || $(addressInput).val() === '' || $(cardNumberInput).val() === '') {
                    alert('Fill all fields');
                }
                else {
                    const strOrder = {
                        name: $(nameInput).val(),
                        address: $(addressInput).val(),
                        cardNumber: $(cardNumberInput).val()
                    };
                    let order = JSON.parse(JSON.stringify(strOrder));

                    $.ajax({
                        type: 'POST',
                        url: 'http://localhost:3000/order',
                        data: order,
                    });
                    deleteTopic(data);
                }
            });

            const backButton = document.createElement('button');
            createButton(backButton, parent, 'btn btn-danger', 'left', 'back', '10px');

            $(backButton).on('click', function() {
                printProducts();
                choose = false;
            });

            const productCard = new LittleCard('#customerProducts', data.header, data.imgURL, data.price);
            productCard.initialize();
        });
    }
}