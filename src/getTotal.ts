let unitPrice: number
unitPrice = 345

function getTotal(unitPrice: number, quan:number,discount:number): number {
    const priceWithoutDisc = unitPrice * quan
    const discAmount = priceWithoutDisc * discount
    return priceWithoutDisc - discAmount
}

let total: number = getTotal(500,5,50)

