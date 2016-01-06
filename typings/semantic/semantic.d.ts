/// <reference path="../jquery/jquery.d.ts" />

interface popupOptions {
    popup?: boolean;
    exclusive?: boolean;
    movePopup?: boolean;
    context?: string | JQuery;
    jitter?: number;
}
interface JQuery {
    popup(options?: any): JQuery;
    modal(options?: any): JQuery;
    sidebar(options?: any): JQuery;
    sidebar(...options: any[]): JQuery;
    fixSidebar(): JQuery;
}