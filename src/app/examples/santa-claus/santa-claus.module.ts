import { NgModule } from '@angular/core';
import { routing } from './santa-claus.routes';
import { SantaClausComponent } from './santa-claus.component';
import { CountDownTill } from './count-down.component';
import { CountDirective } from './count.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        SantaClausComponent,
        CountDirective,
        CountDownTill,
    ],
    entryComponents: [CountDownTill]
})
export class SantaModule { }
