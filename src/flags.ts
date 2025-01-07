let flag = false
// flag = 4324

let today = new Date()

let notAssigned: undefined = undefined
let notValue: null = null

let uniqueId: symbol = Symbol("id")

let bigNumber: bigint = 46352465218643861746n

let numbers: number[] = [1,2,3,4]
let strings: Array<string> = ['a']

let user: [string,number] = ['Tomek',40]

let person: { name: string; age: number} = {name: "Tomek", age: 40}

let input: unknown = 'Tekst'

if (typeof input == "string") {
    console.log(input.toLowerCase());
}

function logMess(message: string): void {
    console.log(message)
}

function throwError(message: string): never {
    throw new Error(message)
}

let id: number | string = 123
id = "tekst"

type Person = {name: string}
type Employee = {salary: number}

let osoba: Person & Employee = {name: "Janek", salary: 4232}

enum Kierunki {
    Up = 1,
    Down,
    Left,
    Right
}

let ruch: Kierunki = Kierunki.Up

function identity<T>(value:T):T{
    return value
}

let result = identity<number>(5)

interface User {
    name: string,
    age: number
}

let user_1: User = {name:"Tomek",age:44}

let rOnly: readonly number[] = [123,43,553]
rOnly = [454,33,2]