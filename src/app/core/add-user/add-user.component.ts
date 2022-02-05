import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modals';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  form!: FormGroup;
  eve!:any;

  @Output('useradded') userAdded!:EventEmitter<any>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private user_api:UserService 
    ) { 
      this.form = fb.group({
        name: ['', Validators.required],
        email: ['',[ Validators.email, Validators.required]],
        phone: ['',[ Validators.pattern('/^([010,011,012,015])([0-9]{8})$/') ,Validators.required]],
          address: fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        suite: ['', Validators.required],
        })
      })
    }

  get control() {
    return this.form.controls;
  }
 
  
  

  ngOnInit(): void {
  }
  

  onSubmit(): void {
    this.eve = this.user_api.add_user(this.form.value).subscribe();
    this.userAdded.next();
  }
 

  


}
