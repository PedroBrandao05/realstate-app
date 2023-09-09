export default class Phone {
    readonly value: number

    constructor (private phone: string){
        if (!this.validate(phone)) throw new Error("Telefone inválido")
        this.value = Number(this.format(phone))
    }

    format(phone: string){
        return phone.replace(/\D+/g, "")
    }

    validate(phone: string){
        const formattedPhone = this.format(phone)
        return (formattedPhone.length >= 10 && formattedPhone.length <= 15) 
    }
}