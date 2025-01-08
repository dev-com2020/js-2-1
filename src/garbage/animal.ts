class Animal {
    name: string

    constructor(name:string){
        this.name = name
    }

    move():void{
        console.log(`zwierzak o imieniu ${this.name} spaceruje`)
    }
}

class Dog extends Animal {
    bark(): void {
        console.log(`hau hau - szczeka ${this.name}`)
    }
}

class Bird extends Animal {
    move(): void {
        super.move()
    }
    // move():void{
    //     console.log("Ptak lata")
    // }
}


const reksio = new Dog("Reksio")
reksio.move()
reksio.bark()