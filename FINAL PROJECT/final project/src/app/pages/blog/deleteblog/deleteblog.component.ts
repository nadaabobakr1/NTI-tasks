import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-deleteblog',
  templateUrl: './deleteblog.component.html',
  styleUrls: ['./deleteblog.component.css']
})
export class DeleteblogComponent implements OnInit {
  ID:string=''
  
  BlogData = {
    title:"",
    content:""
    
  }

  constructor(private _dataFetched: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  
  handleDeleteBlog(){
    
    this.ID=this._dataFetched.getID()
    this._dataFetched.deleteBlog(this.ID)
    .subscribe(
      data=> {
        console.log(this.ID)
        console.log("delete tmam")
        this.router.navigate(['/']);
      },
      e=> {
        console.log(e)
        console.log("fe error")
      }
      
      )
    
  }
}
