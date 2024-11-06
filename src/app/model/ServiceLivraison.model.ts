import { Utilisateur } from './Utilisateur.model';

export class ServiceLivraison extends Utilisateur {
    description!: String;
    constructor() {
        super();
    }
}
