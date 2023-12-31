import { describe, expect, test } from "vitest";
import { act, fireEvent, render, screen } from '@testing-library/react'
import IAuthGateway from '../../src/infra/gateways/auth/AuthGateway'
import '@testing-library/jest-dom'
import React from "react";
import Signup from '../../src/ui/pages/Signup/index'
import User from "../../src/domain/entities/user/user";
import { BrowserRouter } from "react-router-dom";

describe("Signup related tests", () => {
    test("should create an user", async () => {  
        const AuthGateway : IAuthGateway = {
            createUser: async (input: User) => {
                return {status: 201}
            }, 
            signin: async (input: {email: string, password: string}) => {
                return {status: 200}
            }
        }

        render(<Signup authGateway={AuthGateway}/>, {wrapper: BrowserRouter})

        const name = screen.getByTitle<HTMLInputElement>('name')
        const email = screen.getByTitle<HTMLInputElement>('email')
        const creci = screen.getByTitle<HTMLInputElement>('creci')
        const phone = screen.getByTitle<HTMLInputElement>('phone')
        const password = screen.getByTitle<HTMLInputElement>('password')
        name.value = "John"
        email.value = "johndoe@gmail.com"
        creci.value = "18916-J"
        phone.value = "11973321430"
        password.value = "1234abcd"
        
        const submitButton = screen.getByTitle('submit')

        await act(async () => {
           fireEvent.click(submitButton)
        })
        
        const message = screen.getByTitle('response-message')

        expect(message.innerHTML).toBe("Usuário Cadastrado")
    })
    
    test("should not create an user if there is an empty input", async () => {
        const AuthGateway : IAuthGateway = {
            createUser: async (input: User) => {
                return {code: 201}
            },
            signin: async (input: {email: string, password: string}) => {
                return {status: 200}
            }
        }

        render(<Signup authGateway={AuthGateway}/>, {wrapper: BrowserRouter})
        
        const name = screen.getByTitle<HTMLInputElement>('name')
        const email = screen.getByTitle<HTMLInputElement>('email')
        name.value = "John"
        email.value = "johndoe@gmail.com"
        const submitButton = screen.getByTitle('submit')
        await act(async () => {
           fireEvent.click(submitButton)
        })   
        const message = screen.getByTitle('response-message')
        expect(message.innerHTML).toBe("Preencha todos os campos!")
    })
})