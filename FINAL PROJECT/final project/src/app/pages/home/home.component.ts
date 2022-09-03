import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: any[] = []
 
  isLoaded :boolean= false
  errMsg:string=""
public itemID:string=""
 
  


  constructor(private _dataFetched: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getMyData(),
    this.getItemID("id"),
    this.showItem("id"),
    this.editItem("id")
  }

  showItem(id:string){
    this.itemID=id;
    console.log("show item in home ts this is itemID :")
    console.log(this.itemID)
    this._dataFetched.setID(this.itemID)

   return this.itemID
  }
  editItem(id:string){
    this.itemID=id;
    console.log("edit item in home ts this is  itemID :")
    console.log(this.itemID)
    this._dataFetched.setID(this.itemID)

   return this.itemID
  }
  getItemID(id:string){
    this.itemID=id;
    console.log("edit item in home ts this is  itemID :")
    console.log(this.itemID)
    this._dataFetched.setID(this.itemID)

   return this.itemID
  }

  handleDeleteBlog(id:any){
    console.log("handleDeleteBlog id is")
    console.log(id)
    this._dataFetched.deleteBlog(id).subscribe(
      data=> {
        
        console.log("delete tmam el tamam fel home ts")
        // this.router.navigate(['/']);
      },
      e=> {
        console.log(e)
        console.log("fe error")
      }
      
      )
    
  }
 


  getMyData(){
    this._dataFetched.getBlogs().subscribe(
      dataFetched=>{
        console.log(dataFetched)
        // this.blogs = data
        this.blogs = dataFetched.data
        //data.data 2nd data 2asdy beeha el array of data ely  gowa el api 
      },
      e=>{
        this.errMsg=e.message
        this.isLoaded=true
      },
      ()=>{
        this.isLoaded=true
      }
    )
  }

  
}
