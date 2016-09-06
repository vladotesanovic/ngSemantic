import { Component, QueryList, AfterViewInit, ElementRef, Input, ContentChildren, ViewChild } from "@angular/core";

declare var jQuery: any;

@Component({
  selector: "sm-tab",
  template: `
<div #tab>
    <ng-content></ng-content>
</div>  `
})
export class SemanticTabComponent implements AfterViewInit {
  @Input() tab: number;
  @Input() title: string;
  @Input() active: boolean;
  @ViewChild("tab") tabEl: ElementRef;

  ngAfterViewInit() {
    this.tabEl.nativeElement.parentElement.classList.add("ui", "tab", "bottom", "attached", "segment");

    if (this.active) {
      this.tabEl.nativeElement.parentElement.classList.add("active");
    }
  }
}

/**
 * @TODO Implements events ( Output )
 */
@Component({
  selector: "sm-tabs",
  template: `<div class="ui top attached tabular menu" #menu>
  <a class="item" [ngClass]="{'active': tab.active}" *ngFor="let tab of tabs">{{tab.title}}</a>
</div>
<ng-content></ng-content>
`
})
export class SemanticTabsComponent implements AfterViewInit {
    @ContentChildren(SemanticTabComponent) tabs: QueryList<SemanticTabComponent>;
    @ViewChild("menu") menu: ElementRef;
    // @todo Write interface for options, from :
    // http://semantic-ui.com/modules/tab.html#/settings
    @Input("options") options: {} = {};

    constructor(public elementRef: ElementRef) {}

    ngAfterViewInit() {

        // init tabs
        this.initItemsIndices();
        this.initTabs();
        this.updateTabContentIndices();

        // if new tabs are added, re-init
        this.tabs
          .changes
          .debounceTime(100)
          .subscribe(() => {
            this.initItemsIndices();
            this.updateTabContentIndices();
          });
    }

    initItemsIndices() {

        Array
            .from(this.menu.nativeElement.getElementsByClassName("item"))
            .map((element: HTMLElement, index: number) => {
                element.setAttribute("data-tab", `tab-${index}`);

                // @todo This should be removed, but without this it does not work
                jQuery(element).data("tab", `tab-${index}`);
            });
    }

    updateTabContentIndices() {

        this.tabs
            .map((cmp: SemanticTabComponent, index: number) => {
              cmp.tabEl.nativeElement.parentElement.setAttribute("data-tab", `tab-${index.toString()}`);
            });

        this.initTabs();
    }

    initTabs() {

        this.options = Object.assign(this.options, {
            childrenOnly: true,
            context: this.elementRef.nativeElement
        });

        const tab: { tab: Function } = jQuery(this.menu.nativeElement.getElementsByClassName("item"))
            .tab(this.options);

        // set first to be active if there is no active tabs
        if (!this.menu.nativeElement.getElementsByClassName("item active").length) {
           tab.tab("change tab", "tab-0");
        }
    }
}
