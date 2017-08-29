import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeblockComponent } from './codeblock.component';
import { PrismJsDirective } from './prismjs.directive';

@NgModule({
  declarations: [
    CodeblockComponent,
    PrismJsDirective
  ],
  exports: [
    CodeblockComponent,
    PrismJsDirective
  ],
  imports: [
    CommonModule
  ]
})
export class PrismjsModule {}
