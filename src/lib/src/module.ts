import { SemanticMenuComponent } from './components/menu/menu';
import { SemanticMessageComponent } from './components/message/message';
import { SMTooltipDirective } from './components/popup/tooltip';
import { SemanticPopupComponent } from './components/popup/popup';
import { SemanticModalComponent, SMModalTagsDirective } from './components/modal/modal';
import { SemanticSegmentComponent } from './components/segment/segment';
import { SemanticListComponent } from './components/list/list';
import { SemanticButtonComponent } from './components/button/button';
import { SemanticItemComponent } from './components/item/item';
import { SMVisibilityDirective, SMDeviceVisibilityDirective } from './components/visibility/visibility';
import { SemanticDropdownComponent } from './components/dropdown/dropdown';
import { SemanticSelectComponent } from './components/select/select';
import { SemanticSearchComponent } from './components/search/search';
import { SemanticLoaderComponent } from './components/loader/loader';
import { SemanticCardComponent, SemanticCardsComponent, SMCardTagsDirective } from './components/card/card';
import {
  SemanticInputComponent,
  SemanticTextareaComponent,
  SemanticCheckboxComponent
} from './components/input/input';
import { SemanticSidebarComponent } from './components/sidebar/sidebar';
import { SemanticTabsComponent, SemanticTabComponent } from './components/tab/tab';
import { SemanticFlagComponent } from './components/flag/flag';
import { SemanticContextMenuComponent } from './components/contextmenu/contextmenu';
import { SemanticProgressComponent } from './components/progress/progress';
import { SemanticDimmerComponent } from './components/dimmer/dimmer';
import { SemanticTransitionComponent } from './components/transition/transition';
import { SemanticShapeComponent } from './components/shape/shape';
import { SemanticAccordionComponent, SemanticAccordionItemComponent } from './components/accordion/accordion';
import { SemanticRatingComponent } from './components/rating/rating';

const SEMANTIC_COMPONENTS: Array<any> = [
  SemanticCardComponent,
  SemanticCardsComponent,
  SemanticContextMenuComponent,
  SemanticInputComponent,
  SemanticTextareaComponent,
  SemanticCheckboxComponent,
  SemanticMenuComponent,
  SemanticMessageComponent,
  SemanticSegmentComponent,
  SemanticDimmerComponent,
  SemanticTransitionComponent,
  SemanticShapeComponent,
  SemanticPopupComponent,
  SemanticDropdownComponent,
  SemanticListComponent,
  SemanticSelectComponent,
  SemanticFlagComponent,
  SemanticSearchComponent,
  SemanticItemComponent,
  SemanticSidebarComponent,
  SemanticProgressComponent,
  SemanticModalComponent,
  SemanticTabsComponent,
  SemanticTabComponent,
  SemanticButtonComponent,
  SemanticLoaderComponent,
  SemanticAccordionComponent,
  SemanticAccordionItemComponent,
  SemanticRatingComponent
];

const SEMANTIC_DIRECTIVES: Array<any> = [
  SMTooltipDirective,
  SMVisibilityDirective,
  SMDeviceVisibilityDirective,
  SMModalTagsDirective, // directives with no functionality, simply declare tags
  SMCardTagsDirective
];

import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SEMANTIC_DIRECTIVES,
    SEMANTIC_COMPONENTS
  ],
  exports: [
    SEMANTIC_DIRECTIVES,
    SEMANTIC_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
class NgSemanticRootModule {}

@NgModule({
  imports: [],
  exports: []
})
export class NgSemanticModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgSemanticRootModule
    };
  }
}
