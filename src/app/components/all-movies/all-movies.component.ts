import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit{

  Movies : any = []                         //Storing all the movies
  genres: any = []                          // storing genres list
  show = false                              // condition for genres list view anddefault view
  genresResult : any = []                  // storing the movies list getting by genres
  constructor(private service : ApiService){}

  ngOnInit(){
    this.getAllMovies()
    this.getGenres()
  }


  getAllMovies(){
    this.service.nowPlaying().subscribe(response=>{
      this.Movies = response.results
    })
  }

  getGenres(){
    this.service.getGenres().subscribe(Response=>{
      this.genres = Response.genres
    })
  }

  // Getting the id of the genre and then showing the list of movies it contains

  getid(item:any){
    this.show = true
    this.service.getMoviesListByGenres(item.id).subscribe(response=>{
     this.genresResult = response.results
     console.log(this.genresResult);
    })
  }
}
