interface JQuery {
    popup(options?: any): JQuery;
    modal(options?: any): JQuery;
    sidebar(options?: any): JQuery;
    sidebar(...options: any[]): JQuery;
    tab(options?: any): JQuery;
    fixSidebar(): JQuery;
}

declare module "ng-semantic/semantic" {
    export let SEMANTIC_COMPONENTS: Array<any>;
    export let SEMANTIC_DIRECTIVES: Array<any>;
}