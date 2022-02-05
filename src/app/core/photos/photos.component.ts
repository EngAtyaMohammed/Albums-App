import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  
  photos!:any[];
  event!:any;
  userid:any=this.url.snapshot.params.userid;
  albumid:any=this.url.snapshot.params.albumid;
  albums!:any[];
  user!:any;

  constructor(
    private user_api:UserService,
    private url:ActivatedRoute
    ) { }


  ngOnInit(): void {

    this.event=this.user_api.get_user_by_id(this.userid).subscribe(
      (res)=>{
        this.user = res.body;
        this.albums=this.user.albums;
        this.albums.forEach(album => {
          if(album.id == this.albumid){
            this.photos= album.photos;
          }
        })
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
