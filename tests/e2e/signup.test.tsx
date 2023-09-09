import { describe, expect, test } from "vitest";
import { act, fireEvent, render, screen } from '@testing-library/react'
import AuthGateway from '../../src/infra/gateways/AuthGateway'
import AxiosAdapter from '../../src/infra/http/AxiosAdapter'
import React from "react";
import Signup from '../../src/ui/pages/Signup/index'

describe("Signup related tests", () => {
    test.skip("should create an user", async () => {  
        const authGateway = new AuthGateway(new AxiosAdapter())

        render(<Signup authGateway={authGateway}/>)

        const name = screen.getByTitle<HTMLInputElement>('name')
        const email = screen.getByTitle<HTMLInputElement>('email')
        const confirmEmail = screen.getByTitle<HTMLInputElement>('confirm-email')
        const creci = screen.getByTitle<HTMLInputElement>('creci')
        const phone = screen.getByTitle<HTMLInputElement>('phone')
        const password = screen.getByTitle<HTMLInputElement>('password')
        name.value = "John"
        email.value = "paraujart@gmail.com"
        confirmEmail.value = "paraujart@gmail.com"
        creci.value = "18916J"
        phone.value = "11973321430"
        password.value = "1234abcd"
        
        const submitButton = screen.getByTitle('submit')

        await act(async () => {
           fireEvent.click(submitButton)
        })
        
        const message = screen.getByTitle('response-message')

        expect(message.innerHTML).toBe("Usuário Cadastrado")
    })
})