import { Component, OnInit ,OnDestroy} from '@angular/core';
import { User } from 'src/app/modals';
import {UserService}from 'src/app/services/user.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit ,OnDestroy {

  constructor(private user_api:UserService) { 
 
  }

  users:any;
  event:any;

  ngOnInit(): void {
    this.event=this.user_api.get_all_users().subscribe(
    (res)=>{
      this.users = res.body;
    },
    (err) => {
      console.log(err);
    }
  );

}

  ngOnDestroy(){
    this.event.unsubscribe();
  }
  addNewUser():void{
    alert('it works');
  }

}
