import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Album } from '../modals'
import { map } from 'rxjs/operators';
interface response {
  users: any;
  albums: Array<Album>;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:3000/users';
  users: User[] = [];
  albums!: Array<Array<Album>>;

  constructor(private http: HttpClient) { }


  get_all_users() {
    return this.http.get(this.url, {
      observe: 'response',
    });
  }
  get_user_by_id(id: string) {
    return this.http.get(`${this.url}/${id}`, {
      observe: 'response',
    });
  }

  get_albums(id: string) {
    return this.http.get<response>(`${this.url}/${id}`)
      .pipe(map(e => {
        return e.albums;
      }))

  }

  add_user(user: object) {
    return this.http.post(this.url, user);
  }

}
