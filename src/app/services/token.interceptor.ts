import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthserviceService } from './authservice.service';

export const tokenInterceptor: HttpInterceptorFn = (
    req,
    next
): Observable<HttpEvent<unknown>> => {
    const toExclude = [
        'baba/login',
        '/newcommande',
        '/register',
        '/verification',
        '/panier',
        '/allprods',
        '/allnoms',
        'allcats',
        'allsc',
        '/allnomss',
        '/allnomsf',
        '/verifyEmail',
        '/getByid',
        '/all',
    ];
    const authService = inject(AuthserviceService).getToken();

    if (!toExclude.some((url) => req.url.includes(url))) {
        const jwt = authService;
        const reqWithToken = req.clone({
            setHeaders: { Authorization: `Bearer ${jwt}` },
        });
        return next(reqWithToken);
    }

    return next(req);
};
