import { Utilisateur } from './Utilisateur.model';

export class Admin extends Utilisateur {
    matricule!: string;
    constructor() {
        super();
    }
}
