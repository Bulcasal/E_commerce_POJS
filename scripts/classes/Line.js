class Line
{
    #product;
    tr_cart_product;
    event;

    constructor(product, cart) {
        this.product = product;
        this.cart = cart;
        this.#createHtml();
        this.#calculTotalProduct();
        this.#manageInfluentPriceOnChangeEvents();
        this.#manageRemoveProductEvent();
        this.event = new CustomEvent('change');
    }

    /**
     * Retourne le total du panier
     * @returns this.product.total
     */
    getTotal()
    {
        return this.product.total;
    }

    /**
     * Ecoute l'événement click
     */
    addAddToCartListener() {
        const addToCartButton = this.tr_cart_product.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            console.log('clické');
            this.addProductToCart();
        });
    }
    /**
     * Ajoute un produit au panier
     */
    addProductToCart() {
        cart.addProduct(this.product);
        console.log('add au panier');
        cart.calculateTotal();
        console.log('recalcul du panier');
    }

    addToCart(selectedProduct) {
        this.lines.forEach(line => {
            line.addToCart(selectedProduct);
        });
    }

    /**
     * Génère le html des produits dans le panier
     */
    #createHtml() {
        this.tr_cart_product = document.createElement('tr');
        this.tr_cart_product.innerHTML +=
            `
            <td>${this.product.name}</td>
            <td class="unit_price" data-unit-price="${this.product.unit_price}">
                <span class="value">${this.product.unit_price}</span> €
            </td>
            <td class="quantity">
                <input type="number" class="influent-price-on-change" value="${this.product.quantity}" min="0" />
            </td>
            <td class="total_price" data-total-price=></td>
            <td>
                <button class="remove">X</button>
            </td>
           `;
    
        document.querySelector('#cart tbody').appendChild(this.tr_cart_product);
    }
    
    /**
     * Calcule le total d'une ligne dans le tableau
     */
    #calculTotalProduct()
    {
        //Récupère les valeurs
        this.product.quantity = this.tr_cart_product.querySelector('.quantity input').value;
        this.product.unit_price = parseFloat(this.tr_cart_product.querySelector('.unit_price').dataset.unitPrice);
        this.product.total = this.product.quantity * this.product.unit_price;
        //Met à jour la valeur du panier
        this.tr_cart_product.querySelector('.total_price').textContent = this.product.total + '€';
        this.tr_cart_product.querySelector('.total_price').dataset.totalPrice = this.product.total;
    }

    /**
     * Modifie le panier à la suppression d'une ligne du tableau
     */
    #calculTotalRemoveProduct()
    {
        //Récupère les valeurs
        this.product.quantity = this.tr_cart_product.querySelector('.quantity input').value;
        this.product.unit_price = parseFloat(this.tr_cart_product.querySelector('.unit_price').dataset.unitPrice);
        this.product.total = this.product.total - (this.product.quantity * this.product.unit_price);

        //Met à jour la valeur du panier
        this.tr_cart_product.querySelector('.total_price').textContent = this.product.total + '€';
        this.tr_cart_product.querySelector('.total_price').dataset.totalPrice = this.product.total;
        console.log('calcultotalremoveproduct');
    }


    /**
     * Gère le changement de prix dû à des changements sur certaines colonnes.
     * */
    #manageInfluentPriceOnChangeEvents(){
        this.tr_cart_product.querySelectorAll('.influent-price-on-change').forEach( (element) => {
            element.addEventListener('change', (e) => {
                this.#calculTotalProduct();
                this.#emitChangeEvent();
            })
        })
    }

    /**
     * Gère la suppression d'une ligne via le bouton remove
     */
    #manageRemoveProductEvent() {
        this.tr_cart_product.querySelector('.remove').addEventListener('click', (e) => {
            this.tr_cart_product.remove();
            this.#calculTotalRemoveProduct();
            this.#emitChangeEvent();
        })
    }

    #emitChangeEvent()
    {
        this.tr_cart_product.dispatchEvent(this.event);
    }

}