declare module "ng-semantic" {
    export let SEMANTIC_COMPONENTS: Array<any>;
    export let SEMANTIC_DIRECTIVES: Array<any>;
}

declare module "Prism" {
    export const languages: any;
    export function highlight(html: string, language: any): string;
}