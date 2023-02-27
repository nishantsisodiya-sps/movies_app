import { Component, OnInit } from '@angular/core';
import { Root } from 'src/app/model/data';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  upcoming:Root[] = []

  constructor(private service:ApiService){}

  ngOnInit(): void {
    this.upcomingMovies()
  }

  upcomingMovies(){
    this.service.upComing().subscribe(response=>{
      this.upcoming = response.results
      console.log(this.upcoming);
    })
  }

}
