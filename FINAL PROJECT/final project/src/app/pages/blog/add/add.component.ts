import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router}  from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  blogData = {
    title:"",
    content:""
    
  }

  constructor(private _dataFetched:DataService , private router: Router) { }

  ngOnInit(): void {
  }
  handleAddBlog(addBlog:NgForm){
    if(addBlog.valid&& this.blogData.title.length>4 && this.blogData.content.length>20){
      // console.log(this.userData)
      this._dataFetched.addBlog(this.blogData)
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
