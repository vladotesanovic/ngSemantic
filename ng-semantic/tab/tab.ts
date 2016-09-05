import {Component, QueryList, AfterViewInit, ElementRef, Input, ContentChildren, ViewChild} from '@angular/core';

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
    jQuery(this.menu.nativeElement).find(".item").each((index: number, element: JQuery) => {
      $(element).attr("data-tab", `tab-${index}`);
      $(element).data("tab", `tab-${index}`);
    });
  }
  
  initTabs() {
    jQuery(this.menu.nativeElement.getElementsByClassName("item")).tab({
      childrenOnly: true,
      context: jQuery(this.elementRef.nativeElement)
    });
  }
  
  updateTabContentIndices() {
    this.tabs
      .map((cmp: SemanticTabComponent, index: number) => {
        cmp.tabEl.nativeElement.parentElement.setAttribute("data-tab", `tab-${index.toString()}`);
        jQuery(cmp.tabEl.nativeElement.parentElement).data("tab", `tab-${index.toString()}`);
      });
  
    jQuery(this.menu.nativeElement.getElementsByClassName("item")).tab({
      childrenOnly: true,
      context: jQuery(this.elementRef.nativeElement),
      "change tab": `tab-0`
    });
  }
}
