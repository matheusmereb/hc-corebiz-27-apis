import { ExternalClient, InstanceOptions, IOContext, } from "@vtex/api";

// Utilizar em rotas
interface LeadDados{
    email: string
}

// Extend the default IOClients implementation with our own custom clients.
export default class LeadClient extends ExternalClient {
    private routes = {
        leads: () => `/clientes`,
        getlead: ({email}: LeadDados) => `/clientes/${email}`,
        updatelead: ({email}: LeadDados) => `/clientes/${email}`,
    }
    //SE HOUVER AUTENTICAÇÃO ADICIONAR NO HEADERS 'Authotization' 
    constructor(ctx: IOContext, options?: InstanceOptions){
        super('https://2rfmtwqnye.execute-api.us-east-1.amazonaws.com', ctx, {
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
    public updateLead({email}: LeadDados, {...leadData}){
        return this.http.put(
            this.routes.updatelead({email}),
            leadData,
            {
                metric: 'lead-atualizado',
            }
        )
    }
    public getLead({email}: LeadDados){
        return this.http.get(
            this.routes.getlead({email}),
            {
                metric: 'lead-get',
            }
        )
    }
}