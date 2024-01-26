import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'counter',
        loadChildren: () => import('Counter').then(m => m.CounterModule)
    }
];
