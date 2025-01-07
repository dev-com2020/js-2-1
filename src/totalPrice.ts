function calculate(
    product: {name: string; unitPrice: number},
    quantity:number,
    discount:number){
    const priceWithoutDisc = product.unitPrice * quantity
    const discAmount = priceWithoutDisc * discount
    return priceWithoutDisc - discAmount
}