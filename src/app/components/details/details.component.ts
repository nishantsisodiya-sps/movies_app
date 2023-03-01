import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductionCompany, Root } from 'src/app/model/data';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit{
  public url = "https://www.youtube.com/embed/"                      
  mymovies: Root[] = []                            // storing the details of the movies
  production : ProductionCompany[] = []            // storing Production companies
  myVideos: any = []                              // getting all the videos 
  AfterLoadVideos: any = []                      // Storing videos before load more button
  showmore = true
  constructor(private service : ApiService , private activate: ActivatedRoute){
    
  }


  ngOnInit(): void {
    this.checkIdAndGetData()
  }
  
  checkIdAndGetData(){
    this.activate.paramMap.subscribe(res=>{
       let myId = +res.get(' id')
       console.log(myId);
       this.service.getSingleMovie(myId).subscribe(Response=>{
        this.mymovies.push(Response);
         this.production = this.mymovies[0].production_companies


         // Getting Videos


          this.service.getVideos(myId).subscribe(Response=>{
            this.AfterLoadVideos = Response.results
            this.myVideos = [...Response.results.slice(0,4)]
          // Getting keys
          })
       })
  })
  }

 

  loadMore(){
    this.showmore = false
  }
  hide(){
    this.showmore = true
  }

}


