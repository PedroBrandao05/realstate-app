import User from "../../../domain/entities/user/user";
import IAuthGateway, { AuthGatewayDTO } from "./AuthGateway";
import IHttpClient from "../../http/HttpClient";

export default class AuthGateway implements IAuthGateway {
    constructor (
        private readonly httpClient: IHttpClient
    ){}
    private toCreateUserDTO (user: User): AuthGatewayDTO.CreateUserInput {
        return {
            name: user.name.value,
            email: user.email.value,
            creci: user.creci.value,
            phone: user.phone.value,
            password: user.password
        }
    }
    
    async createUser(input: User): Promise<any> {
        const response = await this.httpClient.post("http://localhost:3000/signup", this.toCreateUserDTO(input))
        return response
    }

    async signin(input: AuthGatewayDTO.SigninInput): Promise<any> {
        const response = await this.httpClient.post("http://localhost:3000/signin", input)
        return response
    }
}