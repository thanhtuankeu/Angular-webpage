import { NgModule } from '@angular/core';
import { routingYui }  from './yui.routes';
import { YuiComponent } from './yui.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        routingYui,
        ReactiveFormsModule
    ],
    declarations:[
        YuiComponent
    ],
})
export class YuiModule { }
