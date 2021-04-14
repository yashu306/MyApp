import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userName: string='John Doe';
  emailId: string='john.doe@gmail.com';
  address: string='424  McVaney Road, Franklin, North Carolina, 28734';
  height: string=`5'6"`;
  weight: number=82;
  education:string= 'High school diploma or GED';
  
  constructor() { }

  ngOnInit(): void {
  }

}
