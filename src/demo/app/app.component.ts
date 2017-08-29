import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  @ViewChild('leftSidebar') leftSidebar: ElementRef;

  constructor(public renderer: Renderer2) {
  }

  ngOnInit() {
    this.setFullHeight();
    window.onresize = (): any => this.setFullHeight();
  }

  setFullHeight(): void {
    this.renderer.setStyle(this.leftSidebar.nativeElement, 'height', jQuery(window).height() + 'px');
  }
}
