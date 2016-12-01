import { ElementRef, Component, ViewChild, Input } from "@angular/core";

declare var jQuery: any;

/**
 * Component, implementation of Semantic UI popup components.
 *
 * This component is triggered by UIPopupDirective.
 */
@Component({
  selector: "sm-popup",
  template: `<div class="ui popup very wide {{class}}" #popup>
    <div class="content">
        <ng-content></ng-content>
    </div>
</div>`
})
export class SemanticPopupComponent {
  @ViewChild("popup") popup: ElementRef;
  @Input() class: string;

  private visible: boolean = false;
  private element: Element;

  show(element: Event, data: {} = {}) {

    if (!this.visible) {

      this.visible = true;
      this.element = <Element>element.target;

      const options: {} = Object.assign({
        closable: true,
        exclusive: true,
        lastResort: true,
        on: "click",
        onHide: () => this.hide(),
        popup: this.popup.nativeElement,
        position: "bottom center",
        preserve: true,
      }, data);

      jQuery(this.element)
        .popup(options)
        .popup("show");
    }
  }

  hide() {
    if (this.visible && this.element) {

      this.visible = false;

      jQuery(this.element)
        .popup("hide");
    }
  }
}
