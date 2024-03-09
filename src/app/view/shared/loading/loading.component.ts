import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/shared/loading.service';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent {

  /**
   *
   */
  constructor(public loadingService:LoadingService) {
   
   
  }

}
