import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-in-theater',
  templateUrl: './in-theater.component.html',
  styleUrls: ['./in-theater.component.css']
})
export class InTheaterComponent implements OnInit{
  liveMovies : any = []
  dates : any = []
  constructor(private service : ApiService ){}

  ngOnInit(): void {
    this.getNowPlaying()
  }

  getNowPlaying(){
    this.service.nowPlaying().subscribe(response=>{
      this.liveMovies = response.results
      this.dates.push(response.dates)
    })
  }

}
