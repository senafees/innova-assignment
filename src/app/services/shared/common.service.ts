import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Menu } from 'src/app/models/shared/menu.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  menus: Menu[] = [];
  currentPageTitle: string;
  currentPageSubTitle: string;
  icon: string;

   constructor(    
   ){
    this.menus= [];
    this.menus = [
      new Menu("Home","dashboard","home","Home","Home Page Description"),
      new Menu("User","users","person","Users","User Listing"),
      new Menu("Blogs","blogs","article","Blog","Blogs Listing")
     ];

   }

   ngOnInit(){

    
   }
  
}
