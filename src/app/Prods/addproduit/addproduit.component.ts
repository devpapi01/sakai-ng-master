import { AuthserviceService } from 'src/app/services/authservice.service';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produitservice.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TreeSelectModule } from 'primeng/treeselect';
import { DividerModule } from 'primeng/divider';
import { Produit } from 'src/app/model/produit.model';
import { Categorie } from 'src/app/model/categorie.model';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorieservice.service';
import { Image } from 'src/app/model/image.model';
import { Utilisateur } from 'src/app/model/Utilisateur.model';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'app-addproduit',
    standalone: true,
    imports: [
        FileUploadModule,
        ButtonModule,
        BadgeModule,
        ProgressBarModule,
        ToastModule,
        HttpClientModule,
        CommonModule,
        InputTextModule,
        InputTextareaModule,
        TreeSelectModule,
        DividerModule,
    ],
    providers: [MessageService],
    templateUrl: './addproduit.component.html',
    styleUrl: './addproduit.component.scss',
})
export class AddproduitComponent implements OnInit {
    uploadedFiles: any[] = [];
    newProduit = new Produit();
    Categories!: Categorie[];
    newIdCat!: number;
    newCat!: Categorie;
    uploadedImage!: File;
    imagePath: any;
    email: string;
    u: Utilisateur;

    constructor(
        private config: PrimeNGConfig,
        private messageService: MessageService,
        private produitser: ProduitService,
        private cat: CategorieService,
        private route: Router,
        private auth: AuthserviceService
    ) {}

    onUpload(event: UploadEvent) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
    }
    ngOnInit(): void {
        this.email = this.auth.loggedUser;
        this.auth.getByEmail(this.email).subscribe((data) => (this.u = data));
    }

    addProduit() {
        this.produitser
            .uploadImageProd(
                this.uploadedImage,
                this.uploadedImage.name,
                this.newProduit.idProd
            )
            .subscribe((img: Image) => {
                this.newProduit.images.push(img);
                this.newProduit.categorie = this.Categories.find(
                    (cat) => cat.id == this.newIdCat
                )!;
                this.produitser
                    .updateFournisseur(this.u.id, this.newProduit)
                    .subscribe(() => {
                        this.home();
                    });
            });
    }
    home() {
        this.route.navigate(['listprod']);
    }
}
