import { provideRouter, RouterConfig } from "@angular/router";
import { Type } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

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

const routes: RouterConfig = [
    { component: <Type>HomeComponent, path: "" },
    { component: <Type>LoaderComponent, path: "elements/loader" },
    { component: <Type>ContextmenuComponent, path: "elements/contextmenu" },
    { component: <Type>AccordionComponent, path: "elements/accordion" },
    { component: <Type>ListComponent, path: "elements/list" },
    { component: <Type>FormComponent, path: "elements/form" },
    { component: <Type>InputComponent, path: "elements/input" },
    { component: <Type>CardComponent, path: "elements/card" },
    { component: <Type>DropdownComponent, path: "elements/dropdown" },
    { component: <Type>SelectComponent, path: "elements/select" },
    { component: <Type>CheckboxComponent, path: "elements/checkbox" },
    { component: <Type>SegmentComponent, path: "elements/segment" },
    { component: <Type>SearchComponent, path: "elements/search" },
    { component: <Type>MenuComponent, path: "elements/menu" },
    { component: <Type>MessageComponent, path: "elements/message" },
    { component: <Type>DimmerComponent, path: "elements/dimmer" },
    { component: <Type>RatingComponent, path: "elements/rating" },
    { component: <Type>ProgressComponent, path: "elements/progress" },
    { component: <Type>FlagComponent, path: "elements/flag" },
    { component: <Type>ModalComponent, path: "elements/modal" },
    { component: <Type>PopupComponent, path: "elements/popup" },
    { component: <Type>SidebarComponent, path: "elements/sidebar" },
    { component: <Type>DeviceVisibilityComponent, path: "elements/devicevisibility" },
    { component: <Type>TabComponent, path: "elements/tab" },
    { component: <Type>ButtonComponent, path: "elements/button" },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];
