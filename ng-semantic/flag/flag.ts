import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
	moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-flag",
    template: `<i class="{{flag}} flag"></i>`
})
export class SemanticFlagComponent {
    @Input("flag") flag: string;
}
