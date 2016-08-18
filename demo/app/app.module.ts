import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

import { AppComponent }  from "./components/app";
import { HomeComponent } from "./components/home/home";
import { ContextmenuComponent } from "./components/elements/contextmenu";
import { LoaderComponent } from "./components/elements/loader";
import { ListComponent } from "./components/elements/list";
import { SegmentComponent } from "./components/elements/segment";
import { MenuComponent } from "./components/elements/menu";
import { MessageComponent } from "./components/elements/message";
import { ModalComponent } from "./components/elements/modal";
import { PopupComponent } from "./components/elements/popup";
import { DropdownComponent } from "./components/elements/dropdown";
import { TabComponent } from "./components/elements/tab";
import { ButtonComponent } from "./components/elements/button";
import { CardComponent } from "./components/elements/card";
import { FormComponent } from "./components/elements/form";
import { SidebarComponent } from "./components/elements/sidebar";
import { DimmerComponent } from "./components/elements/dimmer";
import { ProgressComponent } from "./components/elements/progress";
import { InputComponent } from "./components/elements/input";
import { FlagComponent } from "./components/elements/flag";
import { AccordionComponent } from "./components/elements/accordion";
import { RatingComponent } from "./components/elements/rating";
import { SelectComponent } from "./components/elements/select";
import { CheckboxComponent } from "./components/elements/checkbox";
import { SearchComponent } from "./components/elements/search";
import { DeviceVisibilityComponent } from "./components/elements/devicevisibility";
import { routing } from "./routes";

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [ SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, AppComponent, HomeComponent,
        ContextmenuComponent, LoaderComponent, ListComponent, SegmentComponent, MenuComponent,
        MessageComponent, ModalComponent, PopupComponent, DropdownComponent, TabComponent,
        ButtonComponent, CardComponent, FormComponent, SidebarComponent, DimmerComponent, ProgressComponent,
    InputComponent, FlagComponent, AccordionComponent, RatingComponent, SelectComponent, CheckboxComponent,
        SearchComponent, DeviceVisibilityComponent],
    imports:      [ BrowserModule, HttpModule, FormsModule, routing ]
})
export class AppModule {}
