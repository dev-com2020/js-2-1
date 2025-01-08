var Auto = /** @class */ (function () {
    function Auto(model, km) {
        this.km = km;
        this.model = model;
    }
    Auto.prototype.honk = function () {
        console.log("Tr\u0105bi nasz samoch\u00F3d marki ".concat(this.model, " o ilo\u015Bci koni\n            ").concat(this.km));
    };
    return Auto;
}());
var bmw = new Auto("BMW3", 289);
bmw.honk();
