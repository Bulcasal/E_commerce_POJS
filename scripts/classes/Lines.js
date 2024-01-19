class Lines{
    products = [];
    lines = [];
    total = 0;
    cart;

    constructor(products, cart) {
        this.products = products;
        this.cart = cart;
        this.#run();
    }

    /**
     * Calcule le total du panier
     *
     */
    calculTotalLines()
    {
        this.total = 0;
        // 1 - Calcul des lignes
        let dom_total_prices = document.querySelectorAll('.cart_product .total_price')
        this.lines.forEach((line) => {
            this.total += parseFloat(line.getTotal());
        });

        // 2 - Prise en compte du choix de livraison
        this.total += parseFloat(this.getSelectedDeliveryOption());
        document.querySelector('#cart .total_cart').textContent = this.total + "€";
        this.getSelectedDeliveryOption();
    }

    /**
     * Récupère le choix de livraison
     * @returns 
     */
    getSelectedDeliveryOption() {
        const selectedDeliveryOption = document.querySelector('.delivery-option:checked');
        //Condition ternaire
        return selectedDeliveryOption ? parseFloat(selectedDeliveryOption.value) : 0;
    }

    /**
     * Ajoute une ligne au panier lorsque l'on modifie la quantité
     */
    #run(){
        this.products.forEach((product) => {
            let new_line = new Line(product, this);
            new_line.tr_cart_product.addEventListener('change', () => {
                ('run calcultotal lines');
                this.calculTotalLines();
            });
            this.lines.push(new_line);
        })
        this.calculTotalLines();
    }

}
