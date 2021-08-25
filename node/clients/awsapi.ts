import { ExternalClient, InstanceOptions, IOContext, } from "@vtex/api";

// Utilizar em rotas
// interface LeadDados{
//     nome: string
//     telefone: string
//     email: string
// }

// Extend the default IOClients implementation with our own custom clients.
export default class LeadClient extends ExternalClient {
    private routes = {
        leads: () => '/clientes',
    }
    //SE HOUVER AUTENTICAÇÃO ADICIONAR NO HEADERS 'Authotization' 
    constructor(context: IOContext, options?: InstanceOptions){
        super('https://2rfmtwqnye.execute-api.us-east-1.amazonaws.com', context, {
            ...options,
            retries: 3,
            headers: {
                Accept: 'application/json',
            } ,
        })
    }

    public createLead({...leadData}){
        return this.http.post(
            this.routes.leads(),
            leadData,
            {
                metric: 'lead-create',
            }
        )
    }
    public getLead({email}: {email:string}){
        return this.http.post(
            this.routes.leads(),
            email,
            {
                metric: 'lead-create',
            }
        )
    }
}