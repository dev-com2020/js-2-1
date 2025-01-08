class Bank {
    private balance: number

    constructor(initBalance: number){
        this.balance = initBalance
    }

    public deposit(amount:number):void {
        this.balance += amount
        console.log(`Zdeponowano: ${amount}, nowy balans: ${this.balance}`)
    }

    public getBalance():number {
        return this.balance
    }
}
const account = new Bank(100)
account.deposit(400)
console.log(account.getBalance())
// account.balance = 46738462872