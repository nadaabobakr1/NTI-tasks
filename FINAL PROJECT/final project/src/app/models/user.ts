import { Token } from "@angular/compiler"
export interface User {
    _id?:string
    name:string
    email:string
    password:string
    status?:boolean
    age?:number
    userImage?:string
    tokens?:Token[]
    createdAt?:Date
    updatedAt?:Date
}