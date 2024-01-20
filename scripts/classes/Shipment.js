class Shipment {
    #event;
    total;


    constructor(shipments) {
        this.shipments = shipments;
        this.#event = new CustomEvent('change');
        this.total = 0;
    }

    /**
     * Génère les choix de livraison dans le panier
     */
    createHtmlDelivery() {
        console.log('begin createHtmlDelivery');
        const deliveries = document.getElementById('deliveryOptions');
        this.shipments.forEach((shipment) => {
        const containerCreated = document.createElement('div');
        containerCreated.setAttribute('id', 'delivery');
        containerCreated.innerHTML = 
            `
            <td colspan="2">
            <label for="delivery-${shipment.id}">${shipment.name} (${shipment.unit_price} €)</label>
            <input class="delivery-option" name="delivery" id="delivery-${shipment.id}" value="${shipment.unit_price}" type="radio" checked/>
            </td>
            `;
            deliveries.appendChild(containerCreated);
            console.log('end createHtmlDelivery');
        }); 
    }

    /**
     * Ecoute le changement du choix de livraison
     */
    onChangeCheckbox(){
        console.log('begin onChangeCheckbox');
        const checkboxes = document.querySelectorAll('.delivery-option');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', (event) => {
                const shipmentId = event.target.id.split('-')[1];
                const selectedShipment = this.shipments.find(shipment => shipment.id.toString() === shipmentId);
                if (selectedShipment) {
                    this.total = 0;
                    this.total += parseFloat(selectedShipment.unit_price);
                    console.log(this.total, 'thistotal');
                    console.log(parseFloat(selectedShipment.unit_price),'kebab');

                    // document.querySelector('#cart .total_cart').textContent = this.total + "€";
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
