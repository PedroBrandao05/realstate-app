import Email from "../person/email";
import Name from "../person/name";
import Phone from "../person/phone";
import Creci from "./creci";

export default class User {
    private constructor(readonly name: Name, readonly email: Email, readonly creci: Creci, readonly phone: Phone, readonly password: string){}

    static create (name: string, email: string, creci: string, phone: string, password: string){
        return new User(new Name(name), new Email(email), new Creci(creci), new Phone(phone), password)
    }
}