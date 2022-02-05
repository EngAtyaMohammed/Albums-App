import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor() { }

  @Input('user') user:any;
  
  ngOnInit(): void {
  }

}
