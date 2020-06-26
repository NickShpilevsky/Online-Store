'use strict';

function print () {
    for(let i = 0; i < selectedProducts.length; i++) {
        const a = new CustomerList(selectedProducts[i]);
        a.initialize();
    }
}

function printProducts() {
    $('#customerProducts').html('');
    print();
}

function createInput(element, parent, topicText, placeholderText) {
    const topic = document.createElement('h5');
    $(topic).text(topicText);
    parent.appendChild(topic);

    const wrapper = document.createElement('p');
    $(element).attr('type', 'text');
    $(element).attr('placeholder', placeholderText);
    $(element).css({'width': '300px'});
    wrapper.appendChild(element);
    parent.appendChild(wrapper);
}

function createButton(button, parent, btnClass, floatSide, title, margin) {
    $(button).attr('class', btnClass);
    $(button).css({'float': floatSide, 'margin-left': margin});
    $(button).text(title);
    parent.appendChild(button);
}

function addToList (data, index) {
    let check = false;
    for(let i = 0; i < selectedProducts.length; i++) {
        if(selectedProducts[i] === data[index]) {
            check = true;
        }
    }
    if(!check) {
        selectedProducts.push(data[index]);
    }
}

function deleteTopic(data) {
    console.log(selectedProducts);
    console.log(data.header);
    let check = false;
    let index;
    for(let i = 0; i < selectedProducts.length; i++) {
        if(selectedProducts[i].header === data.header) {
            index = i;
            check = true;
        }
    }
    if(check) {
        selectedProducts.splice(index, 1);
        console.log(selectedProducts);
    }
    printProducts();
}