export default class Name {
    constructor(readonly value: string){
        if (!this.validate(value)) throw new Error("Nome inválido")
    }

    validate(name: string){
        return name.match(/([A-Z][a-z])\w/)
    }
}