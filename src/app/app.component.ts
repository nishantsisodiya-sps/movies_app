import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Root } from './model/data';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'open_movies';
  show = true;
  showsidenav = false;
  value:any;
  searchResult :Root[] | undefined
  constructor(private router : Router , private service : ApiService){}

  ngOnInit(): void {
   this.hidenav()
  }

  hidenav(){
    let token = localStorage.getItem('token')
    if(token){
      this.showsidenav = true
    }else{
      this.showsidenav = false
    }
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
    this.hidenav()
  }

  search(val:any){
    this.service.searchMovies(val).subscribe(response=>{
      this.searchResult = response.results
    })
  }

  hideSearch(){
    this.searchResult = undefined
  }

  redirectToDetails(id:number){
    this.router.navigate(['/details' , id])
  }

}