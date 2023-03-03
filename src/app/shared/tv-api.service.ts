import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvApiService {

  constructor(private http : HttpClient) { }

  getTVShows():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US&page=1')
  }

  airingToday():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/tv/airing_today?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US&page=1')
  }

  getDetails(id:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US`)
  }

  getVideos(id:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US`)
  }


  getCertificates():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/certification/movie/list?api_key=ec8394f8af9fce4604d5da48e0b3d405')
  }

  getList():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US&page=1')
  }

  getGenereTv():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/genre/tv/list?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US')
  }

  getGenresShowsList(id:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=ec8394f8af9fce4604d5da48e0b3d405&language=en-US&with_genres=${id}`)
  }

}