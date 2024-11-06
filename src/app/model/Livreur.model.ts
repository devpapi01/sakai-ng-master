import { Utilisateur } from './Utilisateur.model';

export class Livreur extends Utilisateur {
    matricule!: string;
    constructor() {
        super();
    }
}
