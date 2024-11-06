import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProduitService } from 'src/app/services/produitservice.service';

@Component({
    selector: 'app-detailprod',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './detailprod.component.html',
    styleUrl: './detailprod.component.scss',
})
export class DetailprodComponent implements OnInit {
    constructor(private produitservice: ProduitService) {}
    ngOnInit(): void {}
}
