import IAuthGateway from "../../../infra/gateways/auth/AuthGateway";
import * as S from './styled'
import Input, { IInputConfiguration } from "../../shared/atoms/Input";
import Button from "../../shared/atoms/Button";
import OrDivider from "../../shared/atoms/OrDivider";
import { FormEvent, useRef, useState } from "react";
import Email from "../../../domain/entities/person/email";

export default function Signin ({authGateway}: {authGateway: IAuthGateway}){
    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")
    const inputs : IInputConfiguration[] = [
            {
                title: "email",
                id: "email",
                type: "email",
                label: "Email",
                reference: emailInput
            },
            {
                title: "password",
                id: "password",
                type: "password",
                label: "Senha",
                reference: passwordInput
            },
        ] 

    const signin = async (event: FormEvent) => {
        event.preventDefault()
        const allFieldsWereFilled = (emailInput.current?.value && passwordInput.current?.value)
        if (!allFieldsWereFilled) {
            setMessage("Preencha todos os campos!")
            return
        }
        const email = new Email(emailInput.current.value)
        const password = passwordInput.current.value
        const {status, response} = await authGateway.signin({email: email.value, password})
        if (status !== 200){
            setError(true)
            setMessage(response.message)
        } else {
            setMessage("Usuário Logado")
        }
    }

    return (
        <S.Wrapper>
        <S.Title>Realizar Login</S.Title>
        <S.Form>
            {inputs.map((configuration, index) => {
                return (<Input config={configuration} key={index}/>)
            })}
            <Button config={{type: "submit", title: "submit", action: signin, text: "Fazer login"}}/>
        </S.Form>
        <S.BottomDiv>
            <OrDivider />
            <S.LinkToSignin to="/">Criar uma conta</S.LinkToSignin>
        </S.BottomDiv>
        <S.ResponseText error={error} title="response-message">{message}</S.ResponseText>
        <S.WavesBottom />
    </S.Wrapper>
    )
}