class Galery {
    products = [];
    lines = [];

    constructor(products) {
        this.products = products;
        this.createHtmlHomePage();

    }

    createHtmlHomePage() {
        console.log("Creating HTML for Galery with products:", this.products);

        const productContainer = document.createElement('div');
        productContainer.classList.add('product-container');

        this.products.forEach((product) => {
            const productItem = document.createElement('div');
            productItem.classList.add('galeryDisplay');
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.image}" alt="${product.name}" />
                <p>Prix : ${product.unit_price} €</p>
            `;
            productContainer.appendChild(productItem);
        });

        document.querySelector('#product_list').appendChild(productContainer);
    }

}


const products = [
    { name: 'Produit 1', unit_price: 10.99, image: 'pictures/deux.jpg', description: 'Description du produit 1' },
    { name: 'Produit 2', unit_price: 19.99, image: 'pictures/quatre.jpg', description: 'Description du produit 2' },
    { name: 'Produit 3', unit_price: 19.99, image: 'pictures/trois.jpg', description: 'Description du produit 2' },
];

new Galery(products);
// products.forEach((products) => {
//     new Galery(product);
// });




