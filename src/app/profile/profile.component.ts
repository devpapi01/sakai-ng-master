import { Utilisateur } from './../model/Utilisateur.model';
import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { Router, RouterLink } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { AuthserviceService } from '../services/authservice.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        DividerModule,
        ButtonModule,
        InputTextModule,
        InputMaskModule,
        PasswordModule,
        RouterLink,
        TooltipModule,
        FormsModule,
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
    isEditable = false;
    public u = new Utilisateur();
    email: string;
    constructor(private auth: AuthserviceService, private router: Router) {}

    toggleEdit() {
        this.isEditable = !this.isEditable;
    }
    ngOnInit(): void {
        this.email = this.auth.getEmail();
        this.auth.getByEmail(this.email).subscribe((user) => (this.u = user));
        console.log(this.email);
        console.log(this.u);
    }

    update() {
        this.auth.update(this.u).subscribe(() => this.auth.logout());
    }
}
