import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Album, User } from 'src/app/modals';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 constructor(private user_api:UserService,private url:ActivatedRoute) { }



  user!:any;
  event:any;
  id:any=this.url.snapshot.params.userid;
  albums!:any;
  

  ngOnInit(): void {
    this.event=this.user_api.get_user_by_id(this.id).subscribe(
    (res)=>{
      this.user = res.body;
      this.albums=this.user.albums;
    },
    (err) => {
      console.log(err);
    }
  );

}

counting_of_photos(album:any){
  return album.photos.length;
}


  ngOnDestroy(){
    this.event.unsubscribe();
  }  
}
