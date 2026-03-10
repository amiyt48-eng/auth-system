import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn:'root'
})

export class UserService{

api="http://localhost:5000/api/users"

constructor(private http:HttpClient){}

getUsers(){

return this.http.get(this.api)

}

createUser(data:any){

return this.http.post(this.api,data)

}

updateUser(id:any,data:any){

return this.http.put(`${this.api}/${id}`,data)

}

deleteUser(id:any){

return this.http.delete(`${this.api}/${id}`)

}

}