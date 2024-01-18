class Catalogue {
    constructor(products, cart, lines) {
        this.products = products;
        this.cart = cart;
        this.lines = [];
    }

    /**
     * Génère le html du catalogue
     */
    createHtmlList() {
        const tbody = document.querySelector('#catalogue tbody');

        this.products.forEach((product) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${product.name}</td>
                <td class="unit_price" data-unit-price="${product.unit_price}">
                        <span class="value">${product.unit_price}</span> €
                    </td>
                <td><img  src="${product.image}" alt="${product.name}"></td>
                <td class="buttonContainer">
                    <button type="button" class="btn btn-outline-primary show-product" data-product-id="${product.id}">Voir le produit</button>
                    <button type="button" class="btn btn-success add-to-cart" data-product-id="${product.id}">Ajouter au panier</button>
                </td>
            `;
            tbody.appendChild(tr);
            tr.classList.add("productCatalogue");
        });
    }

    // /**
    //  * Ajoute un produit au panier
    //  */
    addCart() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                let productId = button.dataset.productId;
                let selectedProduct = this.products.find(product => product.id === parseInt(productId));
                console.log(productId, 'product id');
                //Stocke le produit cliqué dans le local storage
                localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
                //Mais n'ajoute pas au panier
                this.addToCart(selectedProduct, 'addcart');
                console.log(selectedProduct);
            });
        });
    }
    addToCart(selectedProduct) {
        const newLine = new Line(selectedProduct, this);
        this.lines.push(newLine);
        console.log(`Produit ajouté au panier : ${selectedProduct.name}`);
        localStorage.removeItem("selectedProduct");
    }

    /**
     * Ferme le toast message 
     */
    closeToast(bodySupport){
        const quitToast = document.getElementsByClassName('btn-close ms-2 mb-1');
        console.log(quitToast, 'quitoast: Coucou !'); 
        const quiToastButton = quitToast[0];
        console.log(quiToastButton, 'quitoastbutton: ça va?'); 
        
        quiToastButton.addEventListener('click', (event) =>{
            event.preventDefault();
            console.log('inside eventlistener au click');
            bodySupport.classList.remove('modalDisplay');
        });
    
    }
    
    /**
     * Génère le html de la modale
     */
    createModalHtml(selectedProduct){
        const bodySupport = document.querySelector('.modal');
        console.log(bodySupport, 'bodySupport');
        const receiverSupport = document.querySelector('#productModal');
        console.log(receiverSupport, 'receiversupport');
            console.log('Dedans');
            const divCreated = document.createElement('div');
            receiverSupport.innerHTML = '';
            divCreated.innerHTML =
            `<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <strong class="me-auto">${selectedProduct.name}</strong>
                    <p class="unit_price" data-unit-price="${selectedProduct.unit_price}">
                        <span class="value">${selectedProduct.unit_price}</span> €
                    </p>
                    <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true"></span>
                    </button>
                </div>
                <div class="toast-body">
                <img src="${selectedProduct.image}" alt="${selectedProduct.name}" id="imgToast">
                <p>Description <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vero perspiciatis, debitis id officia fugiat. </p>
                <div class="buttonContainer">
                <button type="button" class="btn btn-info add-to-cart" data-product-id="${selectedProduct.name}" id="quitToast">Revenir à la liste des produits</button>
                </div>
                </div>`                   
            console.log(selectedProduct.name, 'aftercreatehtml');
            receiverSupport.appendChild(divCreated);
            
            // const quitToastButton = document.getElementsByClassName('btn-close ms-2 mb-1');
            // console.log(quitToastButton, 'quitoastbutton'); 

            // receiverSupport.appendChild(divCreated);

            bodySupport.classList.add('modalDisplay');
            this.closeToast(bodySupport);
            // receiverSupport.appendChild(divCreated);

    }
    /**
     * Ouvre la modale au click sur "Voir le produit"
     */
    // showProduct(){
    //     const showProduct = document.querySelectorAll('.show-product');
    //     console.log(showProduct, 'showproduct OK');
    //     showProduct.forEach((button) => {
    //         button.addEventListener('click', (event) => {
    //             event.preventDefault();
    //             console.log('clické');
    //                 let productId = button.dataset.productId;
    //                 let selectedProduct = this.products.find(product => product.id === parseInt(productId));
    //                 console.log(productId, 'product id depuis showProdcut()');
    //                 console.log(selectedProduct, 'Kikou selectedProduct');
    //                 this.createModalHtml(selectedProduct);
    //                 console.log(selectedProduct, 'endshowproduct')
    //             });
    //     });
    // }


showProduct() {
    const showProductButtons = document.querySelectorAll('.show-product');
    showProductButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            let productId = button.dataset.productId;
            let selectedProduct = this.products.find(product => product.id === parseInt(productId));
            console.log(productId, 'product id depuis showProdcut()');
            console.log(selectedProduct, 'Kikou selectedProduct');
            this.createModalHtml(selectedProduct);
            console.log(selectedProduct, 'end showproduct')
        });
    });
}

}
/**
 * Initialise le chargement du catalogue
 */
async function initCatalogue() {
    let response = await fetch('/scripts/data/cart.json');
    let cart = await response.json();

    let catalogue = new Catalogue(cart.products,);
    catalogue.createHtmlList();
    // catalogue.createModalHtml();
    catalogue.addCart();
    //test
    catalogue.showProduct()
    
}

initCatalogue();


