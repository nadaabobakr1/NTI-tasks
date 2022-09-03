import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
    
  }
  logout(){
    // let userData:any = this.loginForm.value
   const x= localStorage.getItem("g21Token")
    this._auth.logout(x).subscribe(
      res=>{ 
        console.log("here at logout in nav ts")
        this._auth.isLoggedin=false
       
        // this._router.navigateByUrl("/")
        
      },
      e=>{},
      ()=>{
        // this._router.navigateByUrl("/")
      }
    )
  
  }

}
