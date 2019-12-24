import { Directive, ViewContainerRef, OnInit, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[ad-host]',
})
export class CountDirective implements OnInit{
    
    constructor(public viewContainerRef: ViewContainerRef, private el: ElementRef) { }
    ngOnInit(): void {
        console.log('init');
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.color = color;
    }
}
