import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { BlogModel } from 'src/app/models/blogs/blog.model';
import { WidgetModel } from 'src/app/models/dashboard/widget.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  displayedColumns : any[] = ['id','title'];
  lstPost : BlogModel[];
  lstWidgets: WidgetModel[] = [];

  cols : number = 4;
  rowHeight : string = '500px';
  


  constructor(public dashboardSVC: DashboardService, private responsive: BreakpointObserver,commonService: CommonService){
    const result =  commonService.menus.find(({ menuNama }) => menuNama === "Home");
    commonService.currentPageTitle = result!.menuTitle;
    commonService.currentPageSubTitle = result!.menuSubTitle;
    commonService.icon = result!.menuIcon;
    this.dashboardSVC.postData$?.subscribe(result => this.lstPost = result);
  }

  ngOnInit(){
    //this.getAllPosts();
    this.getAllWidgets();   
    
  }

  getAllPosts(){
    this.dashboardSVC.postData$?.subscribe(result => this.lstPost = result);
    
    console.log('length of posts');
    console.log(this.lstPost);


    // this.dashboardSVC.getPosts().subscribe((lstPost)=> {
    //   console.log('lstPost', lstPost);
    //   this.lstPost = lstPost;
    // })
  }

  getAllWidgets(){
    this.lstWidgets= [];
    this.lstWidgets = [
      new WidgetModel("shopping_basket","Total Orders","345"),
      new WidgetModel("production_quantity_limits","Total Expenses","267"),
      new WidgetModel("account_balance_wallet","Total Revenue","569"),
      new WidgetModel("person","New Users","120")
     ];
  }
}
