/**
 * Initialise le panier
 * @param {} cart 
 */
function init(cart, shipmentData)
{
    console.log('initcart');
    new Lines(cart.products);
    new Shipment();
    new Cart(lines);
    shipment.onChangeCheckbox(lines);
}

/**
 * Initialise l'affichage du catalogue
 * @param {*} cart 
 * @param {*} lines 
 */
function initCatalogue(cart, lines)
{
    console.log('initcatalogue');
    new Lines(cart.products);
    let catalogue = new Catalogue(cart.products, cart, lines);
    catalogue.createHtmlList();
    catalogue.addCart();
}

/**
 * Initialise l'affichage des produits sur la page d'accueil'
 * @param {} catalogue 
 */
function initNouveautes(cart)
{
    console.log("Initialise les produits nouveautés", cart);
    new Galery(cart.products);
}

/**
 * Recupère en AJAX les données du panier
 */
async function getCart()
{
    let response = await fetch('/scripts/data/cart.json');
    let cart = await response.json();
    init(cart);
    initCatalogue(cart);
    initNouveautes(cart);
}
getCart();

async function getShipment()
{
    let response = await fetch('/scripts/data/shipment.json');
    let shipment = await response.json();
    init(cart, shipment);
}
getShipment();
