export default class Creci {
    readonly value: string

    constructor(readonly creci: string){
        if (!this.validate(creci)) throw new Error("Creci inválido")
        this.value = creci
    }

    validate(creci: string){
        const regExp = /^\d{5}-(F|J)$/
        return regExp.test(creci)
    }
}