import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'app-infos',
    standalone: true,
    imports: [TimelineModule, CardModule, ButtonModule, ImageModule],
    templateUrl: './infos.component.html',
    styleUrl: './infos.component.scss',
})
export class InfosComponent {
    events: EventItem[];

    constructor() {
        this.events = [
            {
                status: 'Choisir son produit',
                icon: 'pi pi-shopping-cart',
                color: '#9C27B0',
            },
            {
                status: 'Commander',

                icon: 'pi pi-cog',
                color: '#673AB7',
            },
            {
                status: 'Choisir le service le livraison',

                icon: 'pi pi-shopping-cart',
                color: '#FF9800',
            },
            {
                status: 'Recupérer 😊',

                icon: 'pi pi-check',
                color: '#607D8B',
            },
        ];
    }
}
