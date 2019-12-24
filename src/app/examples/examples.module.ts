import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SantaClausComponent } from './santa-claus/santa-claus.component';
import { CountDownTill } from './santa-claus/count-down.component';
import { CountDirective } from './santa-claus/count.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        SantaClausComponent,
        CountDirective,
        CountDownTill 
    ],
    entryComponents: [CountDownTill]
})
export class ExamplesModule { }
