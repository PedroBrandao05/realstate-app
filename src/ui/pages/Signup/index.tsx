import { FormEvent, useRef, useState } from "react";
import IAuthGateway from "../../../domain/gateways/auth";
import User from "../../../domain/entities/user/user";


export default function Signup({authGateway}: {authGateway: IAuthGateway}){

    const nameInput = useRef<HTMLInputElement>(null)
    const emailInput = useRef<HTMLInputElement>(null)
    const creciInput = useRef<HTMLInputElement>(null)
    const phoneInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)

    const [message, setMessage] = useState("")

    const createUser = async (event: FormEvent) => {
        event.preventDefault()
        const allFieldsWereFilled = (nameInput.current?.value && emailInput.current?.value && creciInput.current?.value && phoneInput.current?.value && passwordInput.current?.value)
        if (!allFieldsWereFilled) {
            setMessage("Preencha todos os campos!")
            return
        }
        const name = nameInput.current.value
        const email = emailInput.current.value
        const creci = creciInput.current.value
        const phone = phoneInput.current.value
        const password = passwordInput.current.value
        const {status, response} = await authGateway.createUser(User.create(name, email, creci, phone, password))
        if (status !== 201){
            setMessage(response.message)
        } else {
            setMessage("Usuário Cadastrado")
        }
    }
    
    return (
    <div>
        <form style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="name">Nome</label>
            <input ref={nameInput} id="name" title="name" type="text" />
            <label htmlFor="email">Email</label>
            <input ref={emailInput} id="email" title="email" type="email" />
            <label htmlFor="creci">Creci</label>
            <input ref={creciInput} id="creci" title="creci" type="text" />
            <label htmlFor="phone">Telefone</label>
            <input ref={phoneInput} id="phone" title="phone" type="text" />
            <label htmlFor="password">Senha</label>
            <input ref={passwordInput} id="password" title="password" type="password" />
            <button type="submit" title="submit" onClick={createUser}>Cadastrar</button>
        </form>
        <p title="response-message">{message}</p>
    </div>
    )
}