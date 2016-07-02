import { Directive, ViewContainerRef, AfterViewInit, Input } from "@angular/core";
import * as Prism from "Prism";

@Directive({
    selector: "[smPrismjs]"
})
export class PrismJsDirective implements AfterViewInit {
    @Input() smPrismjs: string;

    constructor(public viewContainer: ViewContainerRef) {}

    ngAfterViewInit(): any {
        const html = Prism.highlight(this.viewContainer.element.nativeElement.innerText, Prism.languages[this.smPrismjs]);
        const elClass = "language-" + this.smPrismjs;
        this.viewContainer.element.nativeElement.innerHTML = `<pre class=${elClass}><code>${html}</code></pre>`;
    }

}
