import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SantaClausComponent } from './santa-claus.component';


const routes: Routes = [
    { path: '', component: SantaClausComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);