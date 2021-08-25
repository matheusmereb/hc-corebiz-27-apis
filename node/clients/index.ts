import { IOClients } from "@vtex/api";
import LeadClient from './awsapi'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
    public get lead() {
        return this.getOrSet('lead', LeadClient)
    }
}
