import { Categorie } from './categorie.model';
import { Image } from './image.model';

export class Produit {
    idProd!: number;
    nomProd!: string;
    prixProd!: number;
    descriptionPro!: string;
    quantite!: number;
    dateCreation!: Date;
    categorie!: Categorie;
    images!: Image[];
}
