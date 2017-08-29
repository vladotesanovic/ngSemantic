declare module "Prism" {
  export const languages: any;
  export function highlight(html: string, language: any): string;
}
