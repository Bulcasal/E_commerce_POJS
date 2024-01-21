class Shipment {
    tr_cart_product;


  event;
  selectedShipment;
  deliveries = [];
  shipments;

  constructor(shipments) {
    this.shipments = shipments;
    this.selectedShipment = 0;
    this.lines = lines;
    this.event = new CustomEvent("change");


  }

  /**
   * Génère les choix de livraison dans le panier
   */
  createHtmlDelivery() {
    const deliveries = document.getElementById("deliveryOptions");
    this.shipments.forEach((shipment) => {
      const containerCreated = document.createElement("div");
      containerCreated.setAttribute("id", "delivery");
      containerCreated.innerHTML = `
            <td colspan="2">
            <label for="delivery-${shipment.id}">${shipment.name} (${shipment.unit_price} €)</label>
            <input class="delivery-option" name="delivery" id="delivery-${shipment.id}" value="${shipment.unit_price}" type="radio" checked/>
            </td>
            `;
      deliveries.appendChild(containerCreated);
      console.log("end createHtmlDelivery");
    });
  }

  /**
   * Ecoute le changement du choix de livraison
   */
  onChangeCheckbox() {
    const checkboxes = document.querySelectorAll(".delivery-option");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (event) => {
        const shipmentId = event.target.id.split("-")[1];
        const selectedShipment = this.shipments.find(
          (shipment) => shipment.id.toString() === shipmentId
        );
        if (selectedShipment) {
          this.selectedShipment = 0;
          this.selectedShipment += parseFloat(selectedShipment.unit_price);
          console.log(this.selectedShipment);

        }
      });
    });
  }

  #emitChangeEvent() {
    this.deliver.dispatchEvent(this.event);
  }
}

/**
 * Récupère les données du json
 */
async function getShipment() {
    try{
        let response = await fetch("/scripts/data/shipment.json");
        let delivery = await response.json();
        let shipment = new Shipment(delivery.shipments);
        shipment.createHtmlDelivery();
        shipment.onChangeCheckbox();
    } catch (error) {
        console.error(error, 'Error fetching data');
    }

}
getShipment();
