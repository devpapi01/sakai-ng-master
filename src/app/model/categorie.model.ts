import { Souscategorie } from './souscategorie.model';

export class Categorie {
    id!: number;
    nom!: string;
    description!: string;
    sousCategorie!: Souscategorie[];
}
