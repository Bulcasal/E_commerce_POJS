class Cart {
    line;
    chooseDeliveryOption;
    total;
    dom_total_prices;
    
    constructor(){
        this.calculTotalLines();
        this.manageDeliveryChange();
        this.manageRemoveProductEvent();
        this.dom_total_prices;
    }

    /**
     * Calcule le total du panier
     * @returns total
     */
    #calculTotalCart()
    {
        total = 0;
        this.dom_total_prices = document.querySelectorAll('.cart_product .total_price')
        this.dom_total_prices.forEach( () => {
        this.dom_total_prices.dataset.totalPrice;
            console.log(dom_total_prices);
        });
        // total = document.querySelector('.delivery-option:checked');
        console.log(total, 'fromcalcultotalcart')
        document.querySelector('#cart .total_cart').textContent = total + "€";

        return total;
    }
    
    /**
     * Met à jour le total du panier après avoir supprimé un produit
     */
    updateTotalAfterRemove() {
        console.log('3updatetotalafterremove');        
        this.calculTotalLines();
        calculTotalCart();

        document.querySelector('#cart .total_cart').textContent = this.total + "€";
    }

    /**
     * Gère le changement d'option de livraison
     */
        manageDeliveryChange() {
            console.log('4managedeliverychange');
            const deliveryOptions = document.querySelectorAll('.delivery-option');
            deliveryOptions.forEach((option) => {
                option.addEventListener('change', () => {
                    this.calculTotalLines();
                    document.querySelector('#cart .total_cart').textContent = this.total + "€";
                });
            });
        }

}   
