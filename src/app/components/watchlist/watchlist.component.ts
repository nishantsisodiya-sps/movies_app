import { Component, OnInit } from '@angular/core';
import { Root } from 'src/app/model/data';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  watchlist :Root[] =[]

  constructor(private service:ApiService){}

  ngOnInit(): void {
    this.watchlistMovies()
  }

  watchlistMovies(){
    this.service.watchList().subscribe(response=>{
      this.watchlist = response.results
    })
  }

}
