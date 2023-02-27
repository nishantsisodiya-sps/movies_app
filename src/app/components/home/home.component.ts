import { Component, OnInit } from '@angular/core';
import { Root } from 'src/app/model/data';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  data : Root[] = []
  nowPlaying : Root[] = []
  mainMovies :any = []
  main : any = []
  nowPlayingShow : any = []

  constructor(private service : ApiService){}

  ngOnInit(): void {
    this.getnowPlaying();
    this.mainImageApi()
  }

  getnowPlaying(){
    this.service.nowPlaying().subscribe(Response=>{
      this.nowPlaying = Response.results
      this.nowPlayingShow = this.nowPlaying.slice(0, 8)

    })
  }

  mainImageApi(){
    this.service.myData().subscribe(response=>{
      this.data = response.results
      this.mainMovies = response.results;
      let arr = this.mainMovies.slice(0,6);
      this.main = arr
    })
  }

  showid(id:any){
    console.log(id);
  }

}
