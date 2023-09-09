
export default class Email {

    constructor (readonly value: string){
        if (!this.validate(value)) throw new Error("Email inválido")
    }

    validate(email: string){
        const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return regExp.test(email)
    }
}