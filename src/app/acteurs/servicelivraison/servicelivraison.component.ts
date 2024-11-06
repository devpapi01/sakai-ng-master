import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ServiceLivraison } from 'src/app/model/ServiceLivraison.model';
import { ServiceLivraisonService } from 'src/app/services/servicelivraison.service';
import { CommonModule } from '@angular/common';
import { ProduitService } from 'src/app/services/produitservice.service';
import { Produit } from 'src/app/model/produit.model';
import { RouterLink, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AuthserviceService } from 'src/app/services/authservice.service';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-servicelivraison',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        RouterModule,
        InputTextModule,
        InputNumberModule,
        TagModule,
        IconFieldModule,
        InputIconModule,
        HttpClientModule,
        RouterLink,
        IconFieldModule,
        InputIconModule,
        HttpClientModule,
        DialogModule,
        InputMaskModule,
        PasswordModule,
        InputTextareaModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    templateUrl: './servicelivraison.component.html',
    styleUrl: './servicelivraison.component.scss',
})
export class ServicelivraisonComponent implements OnInit {
    ListeService!: ServiceLivraison[];
    Listeprods!: Produit[];
    livraison: ServiceLivraison;
    myForm!: FormGroup;

    newservice = new ServiceLivraison();
    constructor(
        private fb: FormBuilder,
        private service: ServiceLivraisonService,
        private produit: ProduitService,
        public auth: AuthserviceService
    ) {}
    ngOnInit() {
        this.charger();

        this.myForm = this.fb.group({
            nom: ['', Validators.required],
            prenom: [''],
            email: ['', [Validators.required, Validators.email]],
            telephone: [''],
            password: ['', Validators.required],
            adresse: this.fb.group({
                pays: ['', Validators.required],
                ville: ['', Validators.required],
                emplacement: ['', Validators.required],
            }),
            description: [''],
        });
    }
    show() {
        console.log(this.ListeService);
    }

    charger() {
        this.service.getAll().subscribe((data) => (this.ListeService = data));
    }
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    delete(service: ServiceLivraison) {
        this.service.delete(service.id).subscribe(() => this.charger());
    }
    ajouter() {
        this.service.create(this.newservice).subscribe();
    }

    onSubmit() {
        if (this.myForm.valid) {
            console.log(this.myForm.value);
        } else {
            this.myForm.markAllAsTouched(); // Pour afficher les erreurs si l'utilisateur essaie de soumettre un formulaire invalide
        }
    }

    save() {
        this.service.create(this.newservice).subscribe(() => {
            this.charger();
            this.visible = false;
        });
    }
}
