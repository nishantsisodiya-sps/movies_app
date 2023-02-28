import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { TvApiService } from 'src/app/shared/tv-api.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  showmore = true
  Details : any = []
  showVideos: any = []
  constructor(private service2 : TvApiService , private activate : ActivatedRoute){}

  ngOnInit(){
    this.showDetails()
  }


  showDetails(){
    this.activate.paramMap.subscribe(result=>{
      let id = +result.get(' id')
      console.log(id);
      this.service2.getDetails(id).subscribe(response=>{
       this.Details.push(response)
      console.log(this.Details);


      // Grtting Videos
      this.service2.getVideos(id).subscribe(response=>{
        this.showVideos = response.results
        console.log(this.showVideos)
      })

      })
      
    })
    
  }

  loadMore(){
    this.showmore = false
  }
  hide(){
    this.showmore = true
  }

}
