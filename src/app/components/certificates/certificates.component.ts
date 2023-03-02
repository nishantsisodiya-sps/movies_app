import { Component, OnInit } from '@angular/core';
import { TvApiService } from 'src/app/shared/tv-api.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit{
  certificate : [] = []
  constructor(private service2:TvApiService){}
  ngOnInit(){
    this.getCertificate()
  }

  getCertificate(){
    this.service2.getCertificates().subscribe(response=>{
      console.log(response.certifications);
    })
  }

}
