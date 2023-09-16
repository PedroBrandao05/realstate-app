import { FormEvent, useRef, useState } from "react";
import IAuthGateway from "../../../infra/gateways/auth/AuthGateway";
import User from "../../../domain/entities/user/user";
import * as S from './styled'
import Input, { IInputConfiguration } from "../../shared/atoms/Input";
import Button from "../../shared/atoms/Button";
import OrDivider from "../../shared/atoms/OrDivider";


export default function Signup({authGateway}: {authGateway: IAuthGateway}){

    const nameInput = useRef<HTMLInputElement>(null)
    const emailInput = useRef<HTMLInputElement>(null)
    const creciInput = useRef<HTMLInputElement>(null)
    const phoneInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)
    const [error, setError] = useState(false)

    const [message, setMessage] = useState("")
    const inputs : IInputConfiguration[] = [
            {
                title: "name",
                id: "name",
                type: "text",
                label: "Nome",
                reference: nameInput
            },
            {
                title: "email",
                id: "email",
                type: "email",
                label: "Email",
                reference: emailInput
            },
            {
                title: "phone",
                id: "phone",
                type: "text",
                label: "Celular",
                reference: phoneInput
            },
            {
                title: "creci",
                id: "creci",
                type: "text",
                label: "Creci",
                reference: creciInput
            },
            {
                title: "password",
                id: "password",
                type: "password",
                label: "Senha",
                reference: passwordInput
            },
        ] 

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
            setError(true)
            setMessage(response.message)
        } else {
            setMessage("Usuário Cadastrado")
        }
    }
    
    return (
    <S.Wrapper>
        <S.Title>Realizar Cadastro</S.Title>
        <S.Form>
            {inputs.map((configuration, index) => {
                return (<Input config={configuration} key={index}/>)
            })}
            <Button config={{type: "submit", title: "submit", action: createUser, text: "Finalizar Cadastro"}}/>
        </S.Form>
        <S.BottomDiv>
            <OrDivider />
            <S.LinkToSignin to="/">Já tenho uma conta</S.LinkToSignin>
        </S.BottomDiv>
        <S.ResponseText error={error} title="response-message">{message}</S.ResponseText>
        <S.WavesBottom />
    </S.Wrapper>
    )
}