import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

const defaultBackgroundColor = '#fff';

@Directive({ selector: '[highlight]' })
export class HighlightDirective implements OnChanges {
  @Input('highlight') backgroundColor = '';

  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor =
      this.backgroundColor || defaultBackgroundColor;
  }
}
