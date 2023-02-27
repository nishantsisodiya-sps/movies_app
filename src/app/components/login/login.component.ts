import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { signUp } from 'src/app/model/userAuth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm !: FormGroup;
  signUp !: FormGroup
  signupdata : signUp = {
    name: '',
    email: '',
    password: ''
  }

  constructor(private router : Router , private appcomp : AppComponent){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl(null , [Validators.required , Validators.email]),
      password : new FormControl(null , [Validators.required])
    })


    this.signUp = new FormGroup({
      name : new FormControl(null , [Validators.required]),
      email : new FormControl(null , [Validators.required , Validators.email]),
      password : new FormControl('' , [Validators.required])
    })
  }


  loginFormvalue(){
    // if(this.loginForm.value.email === this.signupdata.email && this.loginForm.value.password === this.signupdata.password){
    //   localStorage.setItem('token' , JSON.stringify('true'))
    //   this.router.navigate(['/home'])
    // }
    if(this.loginForm.value.email == 'nishant@test' && this.loginForm.value.password == '789456'){
      localStorage.setItem('token' , JSON.stringify('true'))
      this.router.navigate(['/home'])
      this.appcomp.showsidenav = true
    }
    else{
      alert("Invalid Credentials")
    }
  }

  signupForm(){
    this.signupdata = this.signUp.value
    localStorage.setItem('token' , JSON.stringify('true'))
    this.router.navigate(['/home'])
  }
}