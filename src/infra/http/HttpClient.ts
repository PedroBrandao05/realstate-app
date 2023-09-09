export default interface IHttpClient {
	get (url: string): Promise<any>
    patch (url: string, body: any): Promise<any>
	post (url: string, body: any): Promise<any>
    delete (url: string): Promise<any>
}