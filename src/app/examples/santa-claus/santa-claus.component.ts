import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import { CountDirective } from './count.directive';
import { CountDownTill } from './count-down.component';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-santa-claus',
  templateUrl: './santa-claus.component.html',
  styleUrls: ['./santa-claus.component.scss']
})
export class SantaClausComponent implements OnInit {
  @ViewChild(CountDirective) adHost: CountDirective;
  interval: any;
  minuteleft = 0;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadCountDown();
    this.gCountDown();
    this.experimentSubcribe();
  }
  loadCountDown() {
    var dateNow = new Date();
    this.minuteleft = 24 * 60 - (dateNow.getHours() * 60 + dateNow.getMinutes());
    var percentage = Math.floor((this.minuteleft  / (24*60))*100);
    const data = { headline: 'Count till ChrisMaX', body: this.minuteleft, percentage: percentage};
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CountDownTill);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<CountDownTill>componentRef.instance).data = data;
  }
  gCountDown() {
    this.interval = setInterval(() => {
      this.loadCountDown();
    }, 3000);
  }
  experimentSubcribe() {
    const el = document.getElementById('my-event');

    // Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent(el, 'mousemove');
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });
  }

}
