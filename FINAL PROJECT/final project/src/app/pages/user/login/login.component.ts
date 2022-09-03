import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    email: new FormControl("marwa@s19.com"),
    password: new FormControl("123456")
  })
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
    // if(this._auth.isLoggedin) this._router.navigateByUrl("/")
  }
login(){
  let userData:any = this.loginForm.value
  this._auth.login(userData).subscribe(
    res=>{ 
      console.log(res)
      localStorage.setItem("g21Token", res.data.token)
      this._auth.isLoggedin=true
      this._auth.userData=res.data.userData
    },
    e=>{},
    ()=>{
      // this._router.navigateByUrl("/")
      
    }
  )

}
}



















// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { DataService } from 'src/app/services/data.service';
// import {
//   CanActivate, Router,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot
// }  from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//     Loginflag:boolean=false
//     userData = {
//       name:"",
//       age:0,
//       email:"",
//       isMarried:false,
//       gender:"",
//       password:""
//     }
//     constructor(private _data:DataService, private router: Router) { }
  
//     ngOnInit(): void {
//     }
//     handlelogin(login:NgForm){
//       if(login.valid){
//         this.Loginflag=true
//         // console.log(this.userData)
//         this._data.login(this.userData)
//         .subscribe(
//           data=> {
//             console.log(data)
//             console.log("tmam loginnn")
//             this.router.navigate(['/']);
//           },
//           e=> {
//             console.log(e)
//             console.log("fe error")
//           }
          
//           )
          
          
//       }

//       else{this.Loginflag=false}
      
//     }
//   }
  