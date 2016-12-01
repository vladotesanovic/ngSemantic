import { Directive, ViewContainerRef, Input, OnInit, Output, EventEmitter } from "@angular/core";

declare var jQuery: any;

/**
 * Implementation of Semantic UI Visibility
 *
 * @link http://semantic-ui.com/behaviors/visibility.html
 */
@Directive({
  selector: "[smDirVisibility]"
})
export class SMVisibilityDirective implements OnInit {

  @Input() smDirVisibility: {};
  @Output() onTopVisible: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() onTopPassed: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() onUpdate: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(public element: ViewContainerRef) {
  }

  ngOnInit(): void {

    if (this.element.element.nativeElement) {
      jQuery(this.element.element.nativeElement)
        .visibility({
          onTopPassed: (calculations: {}) => this.onTopPassed.emit(calculations),
          onTopVisible: (calculations: {}) => this.onTopVisible.emit(calculations),
          onUpdate: (calculations: {}) => this.onUpdate.emit(calculations),
        });
    }
  }
}

/**
 * Custom Implementation of Semantic UI Device Visibility
 *
 * @link http://semantic-ui.com/collections/grid.html#device-visibility
 */
@Directive({
  selector: "[smDeviceVisibility]"
})
export class SMDeviceVisibilityDirective implements OnInit {

  @Input() smDeviceVisibility: string;

  constructor(public element: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.element.element.nativeElement.classList.add(...this.smDeviceVisibility.split(" "));
  }
}
