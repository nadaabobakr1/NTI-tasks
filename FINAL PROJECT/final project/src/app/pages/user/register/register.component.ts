import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}  from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData = {
    name:"",
    age:0,
    email:"",
    isMarried:false,
    gender:"",
    password:""
  }
  constructor(private _data:DataService , private router: Router) { }

  ngOnInit(): void {
  }
  handleregister(register:NgForm){
    if(register.valid&& this.userData.age>20 && this.userData.age<60){
      // console.log(this.userData)
      this._data.register(this.userData)
      .subscribe(
        data=> {
          console.log(data)
          console.log("tmam")
          this.router.navigate(['/']);
        },
        e=> {
          console.log(e)
          console.log("fe error")
        }
        
        )
    }
  }
}
