class Cart {
    line;
    shipment;
    total;
    dom_total_prices;
    
    constructor(){
        this.manageDeliveryChange();
        this.manageRemoveProductEvent();
        this.onChangeCheckbox();
        this.#calculTotalCart();
        
        this.dom_total_prices;
    }

    /**
     * Calcule le total du panier
     * @returns total
     */
    #calculTotalCart()
    {
        console.log('begin calculTotalCart');
        total = 0;
        this.dom_total_prices = document.querySelectorAll('.cart_product .total_price')
        this.dom_total_prices.forEach( () => {
        this.dom_total_prices.dataset.totalPrice;
        });

}

}
