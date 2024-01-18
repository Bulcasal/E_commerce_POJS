class Shipment {
    #chooseDeliveryOption;
    #price;
    delivery_option;
    event;
    shipment;
    div_shipment;
    shipments = [];

    constructor(shipment) {
        this.shipment = shipment;
        this.#createHtmlShipments();
        this.chooseDeliveryOption = chooseDeliveryOption;
        this.price = price;
    }

    /**
     * Génère le html du choix de livraison
     */
    #createHtmlShipments() {
        this.div_shipment = document.createElement('div');
        this.div_shipment.innerHTML +=
            `
                <label>${this.shipment.name}</label>
                <input class="delivery-option" name="delivery" id="delivery-${this.shipment.id}" value="${this.shipment.unit_price}" type="radio" checked>
            `;
        document.querySelector('#ship').appendChild(this.div_shipment);
    }

    /**
     * Ecoute le changement de checkbox
     */
    getSelectedDeliveryOption() {
        const deliveryOptions = document.querySelectorAll('.delivery-option');
        deliveryOptions.forEach((option) => {
            if (option.checked) {
                selectedValue = option.value;
                console.log(selectedValue);
            }
        });
    }
}
