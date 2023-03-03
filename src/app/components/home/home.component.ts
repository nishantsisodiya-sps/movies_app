import { Component, OnInit } from '@angular/core';
import { Root } from 'src/app/model/data';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  data : Root[] = []                // storing all the data coming form myData API
  mainMovies :any = []              // storing movies so that we can use it to slice array
  main : any = []                   // storing the sliced videos to show in suggestions
  nowPlayingShow : any = []         // Storing the videos which will be seen after show more click
  
  constructor(private service : ApiService){}

  ngOnInit(): void {
    this.mainImageApi()
  }

  mainImageApi(){
    this.service.myData().subscribe(response=>{
      this.data = response.results
      this.mainMovies = response.results;
      let arr = this.mainMovies.slice(0,6);
      this.main = arr
      this.nowPlayingShow = this.mainMovies.slice(7)
      
    })
  }


}
