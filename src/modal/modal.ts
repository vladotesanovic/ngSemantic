import {
  Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef, Directive, Output,
  EventEmitter, OnDestroy
} from "@angular/core";

import { PlatformLocation } from '@angular/common';


declare var jQuery: any;

/**
 * Component, implementation of Semantic UI modal components.
 *
 * This component is triggered by SMModalDirective.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-modal",
  template: `<div class="ui modal {{class}}" #modal>
    <i class="close icon"></i>
    <div [ngClass]="{'icon': icon}" class="ui header">
        <i *ngIf="icon" class="icon {{icon}}"></i>
        {{title}}
    </div>
    <div class="content">
        <ng-content select="modal-content"></ng-content>
    </div>
    <div class="actions">
        <ng-content select="modal-actions"></ng-content>
    </div>
</div>`
})
export class SemanticModalComponent implements OnDestroy {
  @Input() class: string;
  @Input() title: string;
  @Input() icon: string;
  @ViewChild("modal") modal: ElementRef;
  @Output() onModalShow: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onModalHide: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isShown: boolean = false;
  @Output() isHidden: boolean = true;

  constructor(private location: PlatformLocation) {
    location.onPopState(() => {
      if (this.isShown) {
        this.hide();
      }
    });
  }

  show(data?: {}) {
    jQuery(this.modal.nativeElement)
      .modal(data || {})
      .modal("toggle");
    this.isShown = true;
    this.isHidden = false;
    this.onModalShow.next(true);
  }

  hide() {
    jQuery(this.modal.nativeElement)
      .modal("hide");
    this.isShown = false;
    this.isHidden = true;
    this.onModalHide.emit(true);
  }

  ngOnDestroy(): void {
    const parent = this.modal.nativeElement.parentElement;
    parent.removeChild(this.modal.nativeElement);
  }
}
/* tslint:disable */
@Directive({ selector: "modal-content, modal-actions" })
export class SMModalTagsDirective {
  /* tslint:enable */
  // no behavior
  // the only purpose is to "declare" the tag in Angular2
}
