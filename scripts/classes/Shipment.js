class Shipment {
    #event;

    constructor(shipments) {
        this.shipments = shipments;
        this.#event = new CustomEvent('change');
    }

    /**
     * Génère les choix de livraison dans le panier
     */
    createHtmlDelivery() {
        const deliveries = document.getElementById('deliveryOptions');
        this.shipments.forEach((shipment) => {
        const containerCreated = document.createElement('div');
        containerCreated.setAttribute('id', 'delivery');
        containerCreated.innerHTML = 
            `
            <label for="delivery-${shipment.id}">${shipment.name} (${shipment.unit_price} €)</label>
            <input class="delivery-option" name="delivery" id="delivery-${shipment.id}" value="${shipment.unit_price}" type="radio"/>
            `;
            deliveries.appendChild(containerCreated);
        });
    }

    /**
     * Ecoute le changement du choix de livraison
     */
    onChangeCheckbox(){
        const checkboxes = document.querySelectorAll('.delivery-option');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', (event) => {
                const shipmentId = event.target.id.split('-')[1];
                const selectedShipment = this.shipments.find(shipment => shipment.id.toString() === shipmentId);
                if (selectedShipment) {
                    console.log(selectedShipment.unit_price);
                    
                    calculTotalLines();
                }
            });
        });
    }
}

/**
 * Récupère les données du json
 */
async function getShipment()
{
    let response = await fetch('/scripts/data/shipment.json');
    let delivery = await response.json();
    let shipment = new Shipment(delivery.shipments);
    shipment.createHtmlDelivery();
    shipment.onChangeCheckbox();
}
getShipment();
