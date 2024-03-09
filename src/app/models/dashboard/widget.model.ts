export class WidgetModel {
    header: string = '';
    subHeader: string = '';
    footer: string = '';
    footerValue: string = '';
    icon: string = '';

    constructor(icon: string, footer: string, footerValue: string){
        this.icon = icon;
        this.footer = footer;
        this.footerValue = footerValue;
    }
}