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
            console.log('5calcultotallines', this.total);
        });

        // 2 - Prise en compte du choix de livraison
        this.total += parseFloat(document.querySelector('.delivery-option:checked').value);
        document.querySelector('#cart .total_cart').textContent = this.total + "€";
        this.getSelectedDeliveryOption();
        console.log('6', this.total);
    }

    /**
     * Ajoute une ligne au panier (quantité par produit)
     */
    #run(){
        this.products.forEach((product) => {
            console.log('7run ajoute lignepanier');
            let new_line = new Line(product, this);
            new_line.tr_cart_product.addEventListener('change', () => {
                ('run calcultotal lines');
                this.calculTotalLines();
            });
            this.lines.push(new_line);
        })
        console.log('run calcultotallines')
        this.calculTotalLines();
    }



    addToCart(product) {
        console.log('8addtocart');
        let new_line = new Line(product, this);
        new_line.tr_cart_product.addEventListener('change', () => {
            this.calculTotalLines();
        });
        this.lines.push(new_line);
    }

}
