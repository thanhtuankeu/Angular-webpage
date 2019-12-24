import { Component, Input } from '@angular/core';

@Component({
    template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}} minute left
      <ngb-progressbar type="success" [value]="39"  [animated]="true" [striped]="true" >{{data.percentage}}</ngb-progressbar><br>
    </div>
  `
})
export class CountDownTill{
    //data headline and number to countdown
    @Input() data: any;

}