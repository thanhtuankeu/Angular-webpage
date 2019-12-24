import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}} minute left
      <ngb-progressbar type="success" [value]=data.percentage  [animated]="true" [striped]="true" >{{data.percentage}}</ngb-progressbar><br>
    </div>
  `
})
export class CountDownTill implements OnInit, OnDestroy , OnChanges{
  
  //data headline and number to countdown
  @Input() data: any;
  
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {

  }
}