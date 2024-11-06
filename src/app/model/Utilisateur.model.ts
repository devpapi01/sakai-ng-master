import { Adresse } from './Adresse.model';

export class Utilisateur {
    id!: number;
    nom!: string;
    prenom!: string;
    email!: string;
    password!: string;
    role!: string;
    telephone!: string;
    adresse: Adresse = new Adresse();
}
