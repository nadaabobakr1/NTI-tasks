import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemID:string=""
  
  constructor( private _http: HttpClient ) { }
  setID(innerData:string){
    this.itemID=innerData
  }
  getID(){
    return this.itemID
  }
  register(data:any):Observable<any>{
    return this._http.post("http://localhost:3000/user/register", data)
  }
  login(data:any):Observable<any>{
    return this._http.post("http://localhost:3000/user/login", data)
  }
  getBlogs():Observable<any>{
    return this._http.get("http://localhost:3000/blog/all")
  }
  addBlog(data:any):Observable<any>{
    return this._http.post("http://localhost:3000/blog/add", data)
  }
  getSingleBlog():Observable<any>{
    return this._http.get(`http://localhost:3000/blog/single/${this.itemID}`)
  }
  editBlog(data:any):Observable<any>{
    return this._http.post(`http://localhost:3000/blog/edit/${this.itemID}`,data)
  }
  deleteBlog(id:any):Observable<any>{
    console.log("henaaa fel delete blog data service id fel service")
    console.log(id)
    return this._http.delete(`http://localhost:3000/blog/delete/${id}`)
  }



}
