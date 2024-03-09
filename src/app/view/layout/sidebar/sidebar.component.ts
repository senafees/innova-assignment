import { Menu } from 'src/app/models/shared/menu.model';
import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {
  menus: Menu[] = [];

   constructor(commonService: CommonService){
    this.menus = commonService.menus;
   }

   ngOnInit(){

    // this.menus= [];
    // this.menus = [
    //   new Menu("Home","dashboard","home","Home","Home Page Description"),
    //   new Menu("User","users","home","Users","Total users 20"),
    //   new Menu("Blogs","blogs","home","Blog","Total blogs 20")
    //  ];
   }
}
