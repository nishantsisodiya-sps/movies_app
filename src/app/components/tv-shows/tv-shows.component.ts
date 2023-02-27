import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit{
  tvShows : any = []
  
  constructor(private service : ApiService){}
  ngOnInit(){
    this.getShows()
  }

  getShows(){
    this.service.getTVShows().subscribe(response =>{
      this.tvShows.push(response.results)
      console.log(this.tvShows);
    })
  }

}
