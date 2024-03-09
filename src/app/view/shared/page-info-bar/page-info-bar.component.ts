import { Component, Input } from '@angular/core';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-page-info-bar',
  templateUrl: './page-info-bar.component.html',
  styleUrls: ['./page-info-bar.component.sass']
})
export class PageInfoBarComponent {
  title : string = '';
  subtitle :string = '';
  icon :string = '';

  constructor(commonService: CommonService){    
    this.title = commonService.currentPageTitle;
    this.subtitle = commonService.currentPageSubTitle;
    this.icon = commonService.icon;
  }
}
