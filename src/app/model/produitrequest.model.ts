export class ProduitFilterRequest {
    minPrix: number = 0;
    maxPrix: number = 0;
    categories: string[];
    souscategories: string[];
    quantiteMin: number = 0;
    quantiteMax: number = 0;
    fournisseurs: string[];
}
