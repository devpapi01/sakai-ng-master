import { Souscategorie } from './../../../model/souscategorie.model';
import { CategorieService } from './../../../services/categorieservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { Categorie } from 'src/app/model/categorie.model';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
    selector: 'app-listecategorie',
    standalone: true,
    imports: [
        RouterModule,
        CardModule,
        ButtonModule,
        CommonModule,
        TableModule,
        DialogModule,
        InputTextModule,
        InputNumberModule,
        TagModule,
        IconFieldModule,
        InputIconModule,
        HttpClientModule,
        FormsModule,
        InputTextareaModule,
    ],
    templateUrl: './listecategorie.component.html',
    styleUrl: './listecategorie.component.scss',
})
export class ListecategorieComponent implements OnInit {
    ListeCats: Categorie[];
    listesousCars: Souscategorie[];
    categorie: Categorie = new Categorie();
    disable: boolean = false;
    constructor(
        private CatService: CategorieService,
        private router: Router,
        public auth: AuthserviceService
    ) {}
    ngOnInit() {
        if (this.auth.getRole() === 'ADMIN') {
            this.disable = true;
        }

        this.CatService.getAllCategories().subscribe(
            (cats) => (this.ListeCats = cats)
        );
    }
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    getdetail(cat: Categorie) {
        this.CatService.getbyid(cat.id).subscribe(
            (data) => (this.categorie = data)
        );
    }

    deleteCat(cat: Categorie) {
        this.CatService.deleteCategory(cat.id).subscribe(() =>
            this.CatService.getAllCategories().subscribe(
                (cats) => (this.ListeCats = cats)
            )
        );
    }
}
