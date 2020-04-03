import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YuiComponent } from './yui.component';


const routes: Routes = [
    { path: '', component: YuiComponent }
];

export const routingYui: ModuleWithProviders = RouterModule.forChild(routes);