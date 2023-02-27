import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductionCompany, Root } from 'src/app/model/data';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{                         
  mymovies: Root[] = []                            // storing the details of the movies
  production : ProductionCompany[] = []
  myVideos: any = []                              // getting all the videos 
  AfterLoadVideos: any = []                      // Storing videos before load more button
  showmore = true
 
  constructor(private service : ApiService , private activate: ActivatedRoute , private senitizer : DomSanitizer){}
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
            this.myVideos.push(Response.results.slice(0,6))
            this.AfterLoadVideos.push(Response.results)
            this.myVideos['url'] = this.senitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.myVideos['key']) 
            console.log(this.myVideos);
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


