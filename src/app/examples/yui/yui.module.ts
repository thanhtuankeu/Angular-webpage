import { NgModule } from '@angular/core';
import { routingYui }  from './yui.routes';
import { YuiComponent } from './yui.component';

@NgModule({
    imports: [
        routingYui,
    ],
    declarations:[
        YuiComponent
    ],
})
export class YuiModule { }
