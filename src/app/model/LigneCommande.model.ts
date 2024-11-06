import { Produit } from './produit.model';

export class LigneCommande {
    id: number;
    produit: Produit;
    quantite: number;
    prixligne: number;
    adrfour: string;
}
