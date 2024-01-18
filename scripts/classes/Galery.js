class Galery {
    products = [];
    lines = [];

    constructor(products) {
        this.products = products;
        this.createHtmlHomePage();

    }

    /**
     * Génère le html de la page d'accueil
     */
    createHtmlHomePage() {
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

/**
 * Affiche les produits dans la page d'accueil
 */
const products = [
    { name: 'Produit 1', unit_price: 10.99, image: 'pictures/deux.jpg', description: 'Description du produit 1' },
    { name: 'Produit 2', unit_price: 19.99, image: 'pictures/quatre.jpg', description: 'Description du produit 2' },
    { name: 'Produit 3', unit_price: 19.99, image: 'pictures/trois.jpg', description: 'Description du produit 2' },
];

new Galery(products);





