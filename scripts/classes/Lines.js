class Lines {
  products = [];
  lines = [];
  total = 0;
  cart;

  constructor(products, cart) {
    this.products = products;
    this.cart = cart;
    this.#run();
    this.calculTotalLines();
    this.shipment = shipment;

  }

  /**
   * Calcule le total du panier
   *
   */
  calculTotalLines() {
    console.log("begin calculTotalLines()");

    this.total = 0;
    // 1 - Calcul des lignes
    let dom_total_prices = document.querySelectorAll(
      ".cart_product .total_price"
    );
    this.lines.forEach((line) => {
      this.total += parseFloat(line.getTotal());
     });
    
    document.querySelector("#cart .total_cart").textContent = this.total + "€";
  }


  /**
   * Ajoute une ligne au panier
   */
  #run() {
    this.products.forEach((product) => {
      let new_line = new Line(product, this);
      new_line.tr_cart_product.addEventListener("change", () => {
        ("run calcultotal lines");
        this.calculTotalLines();
      });
      this.lines.push(new_line);
    });
    this.calculTotalLines();
    this.onChangeCheckbox();
    this.calculTotalLines();

  }
}
