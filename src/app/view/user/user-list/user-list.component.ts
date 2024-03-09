import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/models/users/user.model';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent {
  lstUsers: UserModel[] = [];
  showTableSrtructure: boolean = false;
  showCardSrtructure: boolean = true;

  dataSource: MatTableDataSource<UserModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'designation', 'joining_date']

  constructor(commonService: CommonService){    
    const result =  commonService.menus.find(({ menuNama }) => menuNama === "User");
     commonService.currentPageTitle = result!.menuTitle;
     commonService.currentPageSubTitle = result!.menuSubTitle;
     commonService.icon = result!.menuIcon;
 
   }

  ngOnInit(){
    this.getUserList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUserList(){
    this.lstUsers = [
      {
      id: 101,
      name: 'nafees',
      image: 'https://cdn-icons-png.flaticon.com/512/219/219969.png',
      designation: 'Full Stack Dev',
      joining_date: new Date()
     },
     {
      id: 102,
      name: 'ram',
      image: 'https://cdn-icons-png.freepik.com/512/219/219986.png',
      designation: 'Full Stack Dev',
      joining_date: new Date()
     },
     {
      id: 103,
      name: 'usman',
      image: 'https://cdn-icons-png.flaticon.com/512/219/219969.png',
      designation: 'Full Stack Dev',
      joining_date: new Date()
     },
     {
      id: 104,
      name: 'Shehzad',
      image: 'https://cdn-icons-png.freepik.com/512/219/219986.png',
      designation: 'Full Stack Dev',
      joining_date: new Date()
     },
     {
      id: 105,
      name: 'Umair',
      image: 'https://cdn-icons-png.flaticon.com/512/219/219969.png',
      designation: 'Full Stack Dev',
      joining_date: new Date()
     },
     {
      id: 106,
      name: 'Raza',
      image: 'https://cdn-icons-png.freepik.com/512/219/219986.png',
      designation: 'Full Stack Dev',
      joining_date: new Date()
     },
     {
      id: 107,
      name: 'Sardar',
      image: 'https://cdn-icons-png.freepik.com/512/219/219986.png',
      designation: 'Full Stack Dev',
      joining_date: new Date()
     },
  ];

  this.dataSource = new MatTableDataSource(this.lstUsers);

  console.log(this.dataSource);
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  showCardStructure(){
    this.showCardSrtructure = true;
    this.showTableSrtructure = false;
  }
  showTableStructure(){
    this.showCardSrtructure = false;
    this.showTableSrtructure = true;
  }
}
