import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgSemanticModule } from "ng-semantic";

import { AppComponent }  from "./components/app";
import { HomeComponent } from "./components/home/home";
import { ButtonComponent } from "./components/elements/button";
import { FlagComponent } from "./components/elements/flag";
import { ListComponent } from "./components/elements/list";
import { SegmentComponent } from "./components/elements/segment";
import { LoaderComponent } from "./components/elements/loader";
import { MenuComponent } from "./components/elements/menu";
import { FormComponent } from "./components/elements/form";
import { InputComponent } from "./components/elements/input";
import { SelectComponent } from "./components/elements/select";
import { MessageComponent } from "./components/elements/message";
import { CardComponent } from "./components/elements/card";
import { AccordionComponent } from "./components/elements/accordion";
import { CheckboxComponent } from "./components/elements/checkbox";
import { DimmerComponent } from "./components/elements/dimmer";
import { DropdownComponent } from "./components/elements/dropdown";
import { ModalComponent } from "./components/elements/modal";
import { RatingComponent } from "./components/elements/rating";
import { SearchComponent } from "./components/elements/search";
import { SidebarComponent } from "./components/elements/sidebar";
import { PopupComponent } from "./components/elements/popup";
import { ProgressComponent } from "./components/elements/progress";
import { TabComponent } from "./components/elements/tab";
import { ContextmenuComponent } from "./components/elements/contextmenu";
import { DeviceVisibilityComponent } from "./components/elements/devicevisibility";

import { routing } from "./routes";
import { PrismJsDirective } from "./prismjs/prismjs.directive";
import { CodeblockComponent } from "./prismjs/codeblock.component";

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [ AppComponent, HomeComponent, ButtonComponent,
        CodeblockComponent, PrismJsDirective, FlagComponent, SegmentComponent,
        ListComponent, LoaderComponent, MenuComponent, FormComponent,
        InputComponent, SelectComponent, MessageComponent, CardComponent,
        AccordionComponent, CheckboxComponent, DimmerComponent,
        DropdownComponent, ModalComponent, RatingComponent,
        SearchComponent, SidebarComponent, PopupComponent,
        ProgressComponent, TabComponent, ContextmenuComponent,
        DeviceVisibilityComponent],
    imports:      [ BrowserModule, HttpModule, ReactiveFormsModule, FormsModule, routing, NgSemanticModule ]
})
export class AppModule {}
