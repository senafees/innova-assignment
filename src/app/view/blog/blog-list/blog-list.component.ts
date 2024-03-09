import { Component } from '@angular/core';
import { BlogModel } from 'src/app/models/blogs/blog.model';
import { BlogService } from 'src/app/services/blog.service';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.sass']
})
export class BlogListComponent {
  lstBlogs: BlogModel[] = [];

  constructor(public blogSVC: BlogService, commonService: CommonService){    
   const result =  commonService.menus.find(({ menuNama }) => menuNama === "Blogs");
    commonService.currentPageTitle = result!.menuTitle;
    commonService.currentPageSubTitle = result!.menuSubTitle;
    commonService.icon = result!.menuIcon;
  }

  ngOnInit(){
    this.getBlogsList();
  }

  getBlogsList(){
    this.blogSVC.getBlogs().subscribe((lstBlogs)=> {
      console.log('lstBlogs', lstBlogs);
      this.lstBlogs = lstBlogs;
    })
  }

}
