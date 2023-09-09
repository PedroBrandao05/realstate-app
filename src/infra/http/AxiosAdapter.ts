import axios from "axios";
import IHttpClient from "./HttpClient";

export default class AxiosAdapter implements IHttpClient {

	async get(url: string): Promise<any> {
		let response 
        try {
            response = await axios.get(url);
            console.log(response)
            return response;
        } catch (e: any) {
            return e.response
        }	
	}

	async post(url: string, body: any): Promise<any> {
        let response 
        try {
            response = await axios.post(url, body);
            console.log(response)
            return response;
        } catch (e: any) {
            return e.response
        }	
	}

    async patch(url: string, body: any): Promise<any> {
        let response 
        try {
            response = await axios.patch(url, body);
            console.log(response)
            return response;
        } catch (e: any) {
            return e.response
        }	
    }

    async delete(url: string): Promise<any> {
        let response 
        try {
            response = await axios.delete(url);
            console.log(response)
            return response;
        } catch (e: any) {
            return e.response
        }	
    }
}