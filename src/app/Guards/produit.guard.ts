import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';

import { inject } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

export const produitGuard: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const auth = inject(AuthserviceService);
    const router = inject(Router);
    if (auth.getLogged()) {
        return true;
    } else {
        router.navigate(['login']);
        return false;
    }
};
