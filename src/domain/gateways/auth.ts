import User from "../entities/user/user"

export default interface IAuthGateway {
    createUser (input: User): Promise<any>
}

export namespace AuthGatewayDTO {
    export type CreateUserInput = {
        name: string,
        email: string,
        password: string,
        phone: number,
        creci: string
    }

    export type SigninInput = {
        email: string,
        password: string
    }

    export type SigninOutput = {
        token: string,
        email: string,
        name: string,
        phone: number
    }
}