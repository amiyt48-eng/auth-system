import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService } from '../../../core/services/user.service';

@Component({
selector:'app-users',
standalone:true,
imports:[CommonModule,FormsModule],
templateUrl:'./users.component.html'
})

export class UsersComponent{

users:any=[]
name=''
email=''
editId:any=null

constructor(private userService:UserService){}

ngOnInit(){
this.loadUsers()
}

loadUsers(){

this.userService.getUsers()
.subscribe((res:any)=>{
this.users=res
})

}

saveUser(){

const data={
name:this.name,
email:this.email
}

if(this.editId){

this.userService.updateUser(this.editId,data)
.subscribe(()=>{
this.resetForm()
this.loadUsers()
})

}else{

this.userService.createUser(data)
.subscribe(()=>{
this.resetForm()
this.loadUsers()
})

}

}

editUser(user:any){

this.name=user.name
this.email=user.email
this.editId=user._id

}

deleteUser(id:any){

this.userService.deleteUser(id)
.subscribe(()=>{
this.loadUsers()
})

}

resetForm(){

this.name=''
this.email=''
this.editId=null

}

}