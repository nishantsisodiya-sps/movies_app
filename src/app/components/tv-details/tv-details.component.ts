import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvApiService } from 'src/app/shared/tv-api.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {

  showmore = true                                // For show more videos
  Details: any = []                             // storing Details of the shows
  showVideos: any = []                           // storing videos of BTS
  season: any = []                              // storing seasons
  
  constructor(private service2: TvApiService, private activate: ActivatedRoute) { }

  ngOnInit() {
    this.showDetails()
  }


  showDetails() {
    this.activate.paramMap.subscribe(result => {
      let id = +result.get(' id')
      console.log(id);
      this.service2.getDetails(id).subscribe(response => {
        this.Details.push(response)


        //Getting seasons

        this.season = this.Details[0].seasons



        // Grtting Videos
        this.service2.getVideos(id).subscribe(response => {
          this.showVideos = response.results
        })
      })
    })
  }

  loadMore() {
    this.showmore = false
  }
  hide() {
    this.showmore = true
  }

}
