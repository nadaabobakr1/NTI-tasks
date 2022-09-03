import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = 'http://localhost:3000/user/'
  public userData = null
  public isLoggedin = false
  constructor(private _http:HttpClient) { }
  register(data:User):Observable<any>{
    return this._http.post(`${this.baseURL}register`, data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.baseURL}login`, data)
  }
  logout(data:any):Observable<any>{
    console.log("here at logout in auth service ")
    return this._http.post(`${this.baseURL}logout`, data)
  }
  allUsers():Observable<any>{
    return this._http.get(`${this.baseURL}`)
  }
  singleUser(id:string):Observable<any>{
    return this._http.get(`${this.baseURL}single/${id}`)
  }
  deleteUser(id:string):Observable<any>{
    return this._http.delete(`${this.baseURL}single/${id}`)
  }
  editUser(id:string, data:User):Observable<any>{
  return this._http.patch(`${this.baseURL}single/${id}`, data)
  }
  profile():Observable<any>{
    return this._http.post(`${this.baseURL}profile`, null)
  }
  activate():Observable<any>{
    return this._http.get(`${this.baseURL}activate`)
  }
  imgUpload(data:any):Observable<any>{
    return this._http.post(`${this.baseURL}imgUpload`, data)
  }
}