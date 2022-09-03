import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HomeComponent } from '../../home/home.component';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  ID:string=''
  blogs: any[] = []
  title:string=''
  content:string=''

  



  constructor(private _dataFetched: DataService) { }

  ngOnInit(): void {
  
   this.getID(),
   this.getSingle()
    
  }
  getID(){
 
 
  this.ID=this._dataFetched.getID()
  console.log("single . ts  itemID")
  
    console.log(this.ID)
  
}

getSingle(){
  this._dataFetched.getSingleBlog().subscribe(
    dataFetched=>{
      console.log("api done single")
      console.log(dataFetched.data)
      // this.blogs=dataFetched.data
      this.title=dataFetched.data.title
      this.content=dataFetched.data.content
      console.log("this.title")
      console.log(this.title)
    }

  )
}
}

