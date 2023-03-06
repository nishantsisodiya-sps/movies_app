import { Component, OnInit } from '@angular/core';
import { TvApiService } from 'src/app/shared/tv-api.service';

@Component({
  selector: 'app-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.css']
})
export class AllShowsComponent implements OnInit{
 
 show = false
 GenresList : any = []
 showsList : any = []
  getShowByGenres : any = []

  constructor(private service2:TvApiService){}
 
  ngOnInit(): void {
    this.getGenresForShow()
    this.getShows()
  }

  getGenresForShow(){
    this.service2.getGenereTv().subscribe(Response=>{
      this.GenresList = Response.genres

      
    })
  }

  getShows(){
    this.service2.GetTopRated().subscribe(Response=>{
    this.showsList = Response.results
    })
  }


  getid(item : any){
    this.service2.getGenresShowsList(item.id).subscribe(Response=>{
      this.getShowByGenres = Response.results
      console.log(Response.results);
      this.show = true
    })
  }

}
