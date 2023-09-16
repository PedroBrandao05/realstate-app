import { describe, expect, test } from "vitest";
import { act, fireEvent, render, screen } from '@testing-library/react'
import IAuthGateway from '../../src/infra/gateways/auth/AuthGateway'
import '@testing-library/jest-dom'
import React from "react";
import Signin from '../../src/ui/pages/Signin/index'
import User from "../../src/domain/entities/user/user";
import { BrowserRouter } from "react-router-dom";

const AuthGateway : IAuthGateway = {
    createUser: async (input: User) => {
        return {status: 201}
    }, 
    signin: async (input: {email: string, password: string}) => {
        return {status: 200}
    }
}

describe("Signup related tests", () => {
    test("should signin an user", async () => {  
        render(<Signin authGateway={AuthGateway}/>, {wrapper: BrowserRouter})
        const email = screen.getByTitle<HTMLInputElement>('email')
        const password = screen.getByTitle<HTMLInputElement>('password')
        email.value = "johndoe@gmail.com"
        password.value = "1234abcd"
        
        const submitButton = screen.getByTitle('submit')

        await act(async () => {
           fireEvent.click(submitButton)
        })
        
        const message = screen.getByTitle('response-message')

        expect(message.innerHTML).toBe("Usuário Logado")
    })
    
    test("should signin an user", async () => {  
        render(<Signin authGateway={AuthGateway}/>, {wrapper: BrowserRouter})
        const password = screen.getByTitle<HTMLInputElement>('password')
        password.value = "1234abcd"
    
        const submitButton = screen.getByTitle('submit')
        await act(async () => {
           fireEvent.click(submitButton)
        })
        const message = screen.getByTitle('response-message')
        expect(message.innerHTML).toBe("Preencha todos os campos!")
    })
})