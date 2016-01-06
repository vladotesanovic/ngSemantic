/// <reference path="../jquery/jquery.d.ts" />

interface JQuery {
    popup(options?: any): JQuery;
    modal(options?: any): JQuery;
    sidebar(options?: any): JQuery;
    sidebar(...options: any[]): JQuery;
    fixSidebar(): JQuery;
}