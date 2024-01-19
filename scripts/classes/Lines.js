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
        console.log('begin calculTotalLines()');

        this.total = 0;
        // 1 - Calcul des lignes
        let dom_total_prices = document.querySelectorAll('.cart_product .total_price')
        this.lines.forEach((line) => {
            this.total += parseFloat(line.getTotal());
            console.log('end calculTotalLines()p1');

        });

        // 2 - Prise en compte du choix de livraison
        this.total += parseFloat(this.getSelectedDeliveryOption());
        console.log(this.total, 'choice');
        document.querySelector('#cart .total_cart').textContent = this.total + "€";
        
        console.log('end calculTotalLines()p2');

    }

    /**
     * Récupère la valeur de la checkbox
     * @returns 
     */
    getSelectedDeliveryOption() {
        console.log('begin getSelectedDeliveryOption()');
        const selectedDeliveryOption = document.querySelector('.delivery-option:checked');
        console.log(selectedDeliveryOption.value);
        const selectedDeliveryOptionValue = parseFloat(selectedDeliveryOption.value);
        console.log(selectedDeliveryOptionValue, 'parsefloaté');

        console.log('end getSelectedDeliveryOption()');

        return selectedDeliveryOption ? parseFloat(selectedDeliveryOption.value) : 0;
    }

    /**
     * Ajoute une ligne au panier
     */
    #run(){
        console.log('begin run');

        this.products.forEach((product) => {
            let new_line = new Line(product, this);
            new_line.tr_cart_product.addEventListener('change', () => {
                ('run calcultotal lines');
                this.calculTotalLines();
            });
            this.lines.push(new_line);
        })
        this.calculTotalLines();
        console.log('end run');
    }


}
