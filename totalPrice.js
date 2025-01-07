function calculateJS(product,quantity,discount){
    const priceWithoutDisc = product.price * quantity
    const discAmount = priceWithoutDisc * discount
    return priceWithoutDisc - discAmount
}