async function initCatalogue() {
    let response = await fetch('/scripts/data/cart.json');
    let cart = new Cart();
    let products = await response.json();

    let catalogue = new Catalogue(products, cart);
    catalogue.createHtmlList();
    catalogue.addCart();
}

initCatalogue();
