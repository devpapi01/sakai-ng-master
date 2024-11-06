import { LigneCommande } from './LigneCommande.model';
import { Livreur } from './Livreur.model';
import { ServiceLivraison } from './ServiceLivraison.model';
export type Etat = 'EN_ATTENTE' | 'EN_COURS' | 'LIVREE' | 'ANNULEE';

export class Commande {
    id: number;
    reference: string;
    dateCommande: Date;
    adresseLivraison: string;
    emailRec: string;
    numRec: string;
    prixtotal: number;
    lignesCommande: LigneCommande[];
    serviceLivraison: ServiceLivraison;
    livreur: Livreur;
    etat: Etat;
}
