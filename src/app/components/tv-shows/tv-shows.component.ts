import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { TvApiService } from 'src/app/shared/tv-api.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit{
  tvShows : any = []
  
  constructor(private service2 : TvApiService){}
  ngOnInit(){
    this.getShows()
  }

  getShows(){
    this.service2.getTVShows().subscribe(response =>{
      console.log(response.results);
      this.tvShows.push(response.results)
    })
  }

  

}
