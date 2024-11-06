import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Marchand } from 'src/app/model/marchand.model';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { MarchandserviceService } from 'src/app/services/marchandservice.service';

@Component({
    selector: 'app-listemarchand',
    standalone: true,
    imports: [
        RouterModule,
        CardModule,
        ButtonModule,
        CommonModule,
        TableModule,
        ButtonModule,
        RouterModule,
        InputTextModule,
        TagModule,
        IconFieldModule,
        InputIconModule,
        HttpClientModule,
    ],
    templateUrl: './listemarchand.component.html',
    styleUrl: './listemarchand.component.scss',
})
export class ListemarchandComponent implements OnInit {
    Listemarchand: Marchand[];
    constructor(
        private marchand: MarchandserviceService,
        public auth: AuthserviceService
    ) {}

    ngOnInit(): void {}

    charger() {
        this.marchand.getAll().subscribe((data) => (this.Listemarchand = data));
    }

    delete(m: Marchand) {
        this.marchand.deleteMarchandById(m.id).subscribe(() => this.charger());
    }
}
