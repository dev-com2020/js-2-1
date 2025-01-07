var unitPrice;
unitPrice = 345;
function getTotal(unitPrice, quan, discount) {
    var priceWithoutDisc = unitPrice * quan;
    var discAmount = priceWithoutDisc * discount;
    return priceWithoutDisc - discAmount;
}
var total = getTotal(500, 5, 50);
