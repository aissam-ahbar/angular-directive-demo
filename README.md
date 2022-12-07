# Angular Directive Demo

Add directive to style your HTML Template on the fly.

```
----------------------------------------------------------
# highlight.directive.ts (set background to given color)
----------------------------------------------------------
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
```

```
------------------------------------
# app.module.ts (import directive)
------------------------------------
@NgModule({
  declarations: [AppComponent, HighlightDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```
---------------------------------------------------
# app.component.html (render with red hightlight)
---------------------------------------------------
<p highlight="skyblue">Hello world !</p>
```
