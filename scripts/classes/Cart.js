class Cart {
    line;
    shipment;
    total;
    dom_total_prices;
    
    constructor(shipments){
        this.calculTotalLines();
        this.manageDeliveryChange();
        this.manageRemoveProductEvent();
        this.onChangeCheckbox();
        this.calculTotalLines();
        this.dom_total_prices;

        // this.shipments = new Shipment(shipments);


        // this.shipments.createHtmlDelivery();
        // this.shipments.onChangeCheckbox((shipmentPrice) => {
        //     this.calculateTotal(shipmentPrice);
        //});
        
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
        const selectedShipment = this.shipments.find(shipment => shipment.isSelected());
        if (selectedShipment) {
            this.total += parseFloat(selectedShipment.unit_price);
            console.log(parseFloat(selectedShipment.unit_price),'kebab');
            document.querySelector('#cart .total_cart').textContent = this.total + "€";
                this.shipments = new Shipment(shipments);
                console.log('end calculTotalCart');

        return total;
    }
}

}
