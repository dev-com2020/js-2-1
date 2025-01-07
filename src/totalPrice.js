function calculate(product, quantity, discount) {
    var priceWithoutDisc = product.unitPrice * quantity;
    var discAmount = priceWithoutDisc * discount;
    return priceWithoutDisc - discAmount;
}
