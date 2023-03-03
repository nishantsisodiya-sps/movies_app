import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  myData():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/trending/all/day?api_key=ec8394f8af9fce4604d5da48e0b3d405')
  }

  nowPlaying():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US')
  }

  upComing():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US&page=1')
  }

  watchList():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US')
  }

  searchMovies(val:any):Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/search/multi?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US&page=1&include_adult=false&query=" + val)
  }

  getSingleMovie(id:any):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ec8394f8af9fce4604d5da48e0b3d405`)
  }

  getVideos(id:any):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US `)
  }

  getGenres():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US')
  }

  getMoviesListByGenres(id:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=ec8394f8af9fce4604d5da48e0b3d405&with_genres=${id}`)
  }

}
