import { Utilisateur } from './Utilisateur.model';

export class Fournisseur extends Utilisateur {
    description!: string;
    constructor() {
        super();
    }
}
