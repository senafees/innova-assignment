import { Component } from '@angular/core';
import { Menu } from 'src/app/models/shared/menu.model';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.sass']
})
export class LeftMenuComponent {
   menus: Menu[] = [
    new Menu("Home","Home","home","",""),
    new Menu("User","User","home","",""),
    new Menu("Blogs","Blogs","home","","")
   ];
   
   ngOnInit(){
    console.log('menus', this.menus);
   }
}
