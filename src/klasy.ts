class Auto {
    model: string
    km: number

    constructor(model:string, km: number){
        this.km = km
        this.model = model
    }

    honk():void{
        console.log(`Trąbi nasz samochód marki ${this.model} o ilości koni
            ${this.km}`)
    }
}

const bmw = new Auto("BMW3",289)
bmw.honk()