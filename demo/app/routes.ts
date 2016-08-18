import { Routes, RouterModule } from "@angular/router";

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

const routes: Routes = [
    { component: HomeComponent, path: "" },
    { component: LoaderComponent, path: "elements/loader" },
    { component: ContextmenuComponent, path: "elements/contextmenu" },
    { component: AccordionComponent, path: "elements/accordion" },
    { component: ListComponent, path: "elements/list" },
    { component: FormComponent, path: "elements/form" },
    { component: InputComponent, path: "elements/input" },
    { component: CardComponent, path: "elements/card" },
    { component: DropdownComponent, path: "elements/dropdown" },
    { component: SelectComponent, path: "elements/select" },
    { component: CheckboxComponent, path: "elements/checkbox" },
    { component: SegmentComponent, path: "elements/segment" },
    { component: SearchComponent, path: "elements/search" },
    { component: MenuComponent, path: "elements/menu" },
    { component: MessageComponent, path: "elements/message" },
    { component: DimmerComponent, path: "elements/dimmer" },
    { component: RatingComponent, path: "elements/rating" },
    { component: ProgressComponent, path: "elements/progress" },
    { component: FlagComponent, path: "elements/flag" },
    { component: ModalComponent, path: "elements/modal" },
    { component: PopupComponent, path: "elements/popup" },
    { component: SidebarComponent, path: "elements/sidebar" },
    { component: DeviceVisibilityComponent, path: "elements/devicevisibility" },
    { component: TabComponent, path: "elements/tab" },
    { component: ButtonComponent, path: "elements/button" },
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
