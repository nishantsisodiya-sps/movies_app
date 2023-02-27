import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { TvApiService } from 'src/app/shared/tv-api.service';

@Component({
  selector: 'app-t-vshow-airing',
  templateUrl: './t-vshow-airing.component.html',
  styleUrls: ['./t-vshow-airing.component.css']
})
export class TVshowAiringComponent implements OnInit{
todayShows : any = []

  constructor(private service2:TvApiService){}

  ngOnInit() {
    this.getAiringShow()
  }

  getAiringShow(){
    this.service2.airingToday().subscribe(response=>{
      this.todayShows.push(response.results)  
    })
  }
}
