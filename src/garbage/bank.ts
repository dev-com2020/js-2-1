class Bank {
    private _balance: number

    constructor(initBalance: number){
        this._balance = initBalance
    }

    set deposit(amount:number) {
        this._balance += amount
        console.log(`Zdeponowano: ${amount}, nowy balans: ${this._balance}`)
    }

    get salary():number {
        return this._balance
    }
}
const account = new Bank(100)
account.deposit = 400
console.log(account.salary)
