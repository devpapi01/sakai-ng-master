import { Utilisateur } from './../model/Utilisateur.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { AuthserviceService } from '../services/authservice.service';
@Component({
    selector: 'app-verifyemail',
    standalone: true,

    templateUrl: './verifyemail.component.html',
    styleUrl: './verifyemail.component.scss',
    imports: [FormsModule, InputOtpModule, ButtonModule, RouterLink],
})
export class VerifyemailComponent implements OnInit {
    code: string = '';
    value: any;
    user: Utilisateur = new Utilisateur();
    err = '';
    constructor(private router: Router, private auth: AuthserviceService) {}

    ngOnInit() {
        this.user = this.auth.registredUser;
    }

    onValidate() {
        this.auth.validateEmail(this.code).subscribe({
            next: (res) => {
                this.auth.login(this.user).subscribe({
                    next: (data) => {
                        let jwToken = data.headers.get('Authorization')!;
                        this.auth.saveToken(jwToken);
                        this.router.navigate(['listprod']);
                    },
                    error: (err: any) => {
                        console.log(err);
                    },
                });
            },
            error: (err: any) => {
                if (err.error.errorCode == 'INVALID_TOKEN')
                    this.err = 'Code invalide!';
                if (err.error.errorCode == 'EXPIRED_TOKEN')
                    this.err = 'Code a expiré!';
                console.log(err.errorCode);
            },
        });
    }

    valid() {
        this.router.navigate(['listprod']);
    }
}
