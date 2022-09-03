import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
import { Router}  from '@angular/router';
@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  ID:string=''
  
  BlogData = {
    title:"",
    content:""
    
  }
 

  constructor(private _dataFetched: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getID(),
    this.getOldBlog()

  }

  getID(){
 
 
    this.ID=this._dataFetched.getID()
    console.log("edit blog component get id fun id is ")
    
      console.log(this.ID)
    
  }
getOldBlog(){
  this._dataFetched.getSingleBlog().subscribe(
    dataFetched=>{
      console.log("api get old data ")
      console.log(dataFetched.data)
      // this.blogs=dataFetched.data
      this.BlogData.title=dataFetched.data.title
      this.BlogData.content=dataFetched.data.content
      // console.log("this.title")
      // console.log(this.title)
    }

  )
 

}

  handleEditBlog(editBlog:NgForm){
    console.log("handle edit blog heere")
   
      // console.log(this.userData)
      this._dataFetched.editBlog(this.BlogData)
      .subscribe(
        data=> {
          console.log(data)
          console.log("edit tmam")
          this.router.navigate(['/']);
        },
        e=> {
          console.log(e)
          console.log("fe error")
        }
        
        )
    
  }


  }

