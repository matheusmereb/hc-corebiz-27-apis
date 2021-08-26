import { ExternalClient, InstanceOptions, IOContext, } from "@vtex/api";

// Utilizar em rotas
interface PedidoDados {
    idOrder: string
}

// Extend the default IOClients implementation with our own custom clients.
export default class PedidoClient extends ExternalClient {
    private routes = {
        getpedido: ({ idOrder }: PedidoDados) => `/api/oms/pvt/orders/${idOrder}`,
        getemail: ({userId}:{ userId:string }) => `/api/dataentities/CL/search?_where=userId=${userId}&_fields=email,userId`,
    }

    //AUTENTICAÇÃO API VTEX
    constructor(ctx: IOContext, options?: InstanceOptions) {
        super(`https://${ctx.account}.vtexcommercestable.com.br`, ctx, {
            ...options,
            retries: 3,
            headers: {
                VtexIdclientAutCookie: ctx.authToken,
                'Proxy-Authorization': ctx.authToken,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
    }
    public getPedido({ idOrder }: PedidoDados) {
        return this.http.get(
            this.routes.getpedido({ idOrder }),
            {
                metric: 'pedido-get',
            }
        )
    }
    public getEmail({ userId }:{ userId:string }) {
        return this.http.get(
            this.routes.getemail({ userId }),
            {
                metric: 'pedido-email',
            }
        )
    }
}