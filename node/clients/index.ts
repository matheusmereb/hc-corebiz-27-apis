import { IOClients } from "@vtex/api"
import LeadClient from './leadapi'
import PedidoClient from './vtexOrder'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
    public get lead() {
        return this.getOrSet('lead', LeadClient)
    }
    public get pedido() {
        return this.getOrSet('pedido', PedidoClient)
    }
}
