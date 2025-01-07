var flag = false;
// flag = 4324
var today = new Date();
var notAssigned = undefined;
var notValue = null;
var uniqueId = Symbol("id");
var bigNumber = 46352465218643861746n;
var numbers = [1, 2, 3, 4];
var strings = ['a'];
var user = ['Tomek', 40];
var person = { name: "Tomek", age: 40 };
var input = 'Tekst';
if (typeof input == "string") {
    console.log(input.toLowerCase());
}
function logMess(message) {
    console.log(message);
}
function throwError(message) {
    throw new Error(message);
}
var id = 123;
id = "tekst";
var osoba = { name: "Janek", salary: 4232 };
var Kierunki;
(function (Kierunki) {
    Kierunki[Kierunki["Up"] = 1] = "Up";
    Kierunki[Kierunki["Down"] = 2] = "Down";
    Kierunki[Kierunki["Left"] = 3] = "Left";
    Kierunki[Kierunki["Right"] = 4] = "Right";
})(Kierunki || (Kierunki = {}));
var ruch = Kierunki.Up;
function identity(value) {
    return value;
}
var result = identity(5);
var user_1 = { name: "Tomek", age: 44 };
var rOnly = [123, 43, 553];
rOnly = [454, 33, 2];
