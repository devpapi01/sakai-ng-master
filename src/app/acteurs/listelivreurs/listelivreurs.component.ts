import { Livreur } from './../../model/Livreur.model';
import { Component, OnInit } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AuthserviceService } from 'src/app/services/authservice.service';

import { LivreurService } from 'src/app/services/livreurservice.service';
import { Utilisateur } from 'src/app/model/Utilisateur.model';

@Component({
    selector: 'app-listelivreurs',
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
        DialogModule,
        InputMaskModule,
        PasswordModule,
        RouterLink,
    ],
    templateUrl: './listelivreurs.component.html',
    styleUrl: './listelivreurs.component.scss',
})
export class ListelivreursComponent implements OnInit {
    visible: boolean = false;
    listeLivreurs: Livreur[];
    u: Utilisateur = new Utilisateur();
    li: Livreur;

    mail: string;
    constructor(
        public auth: AuthserviceService,
        private Livreur: LivreurService
    ) {}
    showDialog() {
        this.visible = true;
    }
    ngOnInit(): void {
        if (this.auth.getRole() == 'ADMIN') {
            this.Livreur.getAll().subscribe(
                (data) => (this.listeLivreurs = data)
            );
        } else {
            this.mail = this.auth.getEmail();
            this.auth
                .getByEmail(this.mail)
                .subscribe((data) => (this.u = data));

            this.Livreur.getForServiceLivraison(this.u.id).subscribe(
                (data) => (this.listeLivreurs = data)
            );
        }
    }
}
