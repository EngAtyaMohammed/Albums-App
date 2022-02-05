import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './core/photos/photos.component';
import { UserComponent } from './core/user/user.component';
import { UsersListComponent } from './core/users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path:'users',component:UsersListComponent},
  {path:'user/:userid',component:UserComponent},
  {path:'user/:userid/album/:albumid',component:PhotosComponent,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
