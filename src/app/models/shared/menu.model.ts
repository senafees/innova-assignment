export class Menu {
    menuNama: string = '';
    action: string = '';
    menuIcon: string = '';
    menuTitle: string='';
    menuSubTitle: string='';

    constructor(name: string, action: string, icon: string, title:string, subttitle:string){
        this.menuNama = name;
        this.action = action;
        this.menuIcon = icon;
        this.menuTitle = title;
        this.menuSubTitle = subttitle;
    }
}

