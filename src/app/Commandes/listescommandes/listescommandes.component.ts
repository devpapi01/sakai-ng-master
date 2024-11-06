import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-listescommandes',
    standalone: true,
    imports: [RouterModule, ButtonModule, TableModule, CommonModule],
    templateUrl: './listescommandes.component.html',
    styleUrl: './listescommandes.component.scss',
})
export class ListescommandesComponent {}
