var Bank = /** @class */ (function () {
    function Bank(initBalance) {
        this.balance = initBalance;
    }
    Bank.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Zdeponowano: ".concat(amount, ", nowy balans: ").concat(this.balance));
    };
    Bank.prototype.getBalance = function () {
        return this.balance;
    };
    return Bank;
}());
var account = new Bank(100);
account.deposit(400);
console.log(account.getBalance());
// account.balance = 46738462872
