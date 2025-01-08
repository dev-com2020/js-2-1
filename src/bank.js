var Bank = /** @class */ (function () {
    function Bank(initBalance) {
        this._balance = initBalance;
    }
    Object.defineProperty(Bank.prototype, "deposit", {
        set: function (amount) {
            this._balance += amount;
            console.log("Zdeponowano: ".concat(amount, ", nowy balans: ").concat(this._balance));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bank.prototype, "salary", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    return Bank;
}());
var account = new Bank(100);
account.deposit = 400;
console.log(account.salary);
