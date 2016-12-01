import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, Input } from "@angular/core";

declare var jQuery: any;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-transition",
  template: `
    <div #transition>
        <ng-content></ng-content>
    </div>
    `
})
export class SemanticTransitionComponent {
  @ViewChild("transition") transition: ElementRef;

  /**
   * Show transition element
   *
   * @param animation
   */
  show(animation?: string) {
    jQuery(this.transition.nativeElement)
      .transition(animation || "fade out");
  }

}
