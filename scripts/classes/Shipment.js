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

    #createHtmlShipments() {
        this.div_shipment = document.createElement('div');
        this.div_shipment.innerHTML +=
            `
                <label>${this.shipment.name}</label>
                <input class="delivery-option" name="delivery" id="delivery-${this.shipment.id}" value="${this.shipment.unit_price}" type="radio" checked>
            `;
        document.querySelector('#ship').appendChild(this.div_shipment);
    }


    getSelectedDeliveryOption() {
        const deliveryOptions = document.querySelectorAll('.delivery-option');
        // let selectedValue = null;
        deliveryOptions.forEach((option) => {
            if (option.checked) {
                selectedValue = option.value;
                console.log(selectedValue);
            }
        });
    }
}
