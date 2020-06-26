'use strict';

function sendRequest() {
    $.ajax({
        url: 'http://localhost:3000/products'
    }).done((result) => {
        const JSproducts = JSON.parse(result);
        for(let i = 0; i < JSproducts.length; i++) {
            const p = new Card(JSproducts[i].name, JSproducts[i].parent, JSproducts[i].header, JSproducts[i].imgURL, JSproducts[i].text, JSproducts, JSproducts[i].index);
            p.initialize();
        }
    });
}
$(document).ready(() => {
      sendRequest();
});

const selectedProducts = [];
let choose = false;

$('#cartButton').on('click', function () {
    printProducts();
});