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
     * Initialise les options de livraison dans le panier
     * @param {Array} shipmentOptions - Liste des options de livraison
     */
    initDeliveryOptions(shipmentOptions) {
        this.shipments = shipmentOptions;
    }
    
    /**
     * Gère le changement d'option de livraison
     */
        manageDeliveryChange() {
            const deliveryOptionsContainer = document.querySelector('#deliveryOptions');
            this.shipments.forEach((shipment) => {
                const shipmentInstance = new Shipment(shipment);
                shipmentInstance.render(deliveryOptionsContainer);
    
                // Écoute le changement d'option de livraison
                shipmentInstance.onSelect(() => {
                    this.calculTotalLines();  // Recalcul du total du panier
                });
            });
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
        });
        // total = document.querySelector('.delivery-option:checked');
        // Ajoutez le coût de la livraison au total
        const selectedShipment = this.shipments.find(shipment => shipment.isSelected());
        if (selectedShipment) {
            this.total += selectedShipment.getPrice();
        document.querySelector('#cart .total_cart').textContent = total + "€";

        return total;
    }
}
    
    /**
     * Met à jour le total du panier après avoir supprimé un produit
     */
    updateTotalAfterRemove() {
        this.calculTotalLines();
        calculTotalCart();
        document.querySelector('#cart .total_cart').textContent = this.total + "€";
    }


}
