import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent {
  showmore = false


  loadMore(){
    this.showmore = false
  }
  hide(){
    this.showmore = true
  }

}
