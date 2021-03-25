import { AdminProfileComponent } from './../admin-profile/admin-profile.component';
import { Component, OnInit } from '@angular/core';
import { profileData } from 'src/app/services/profile.service';
import { profile } from '../admin-profile/profileData';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile;
  constructor(private profilData :profileData) { }

  ngOnInit(): void {
    this.profilData.getData().subscribe(
      (respond)=>{
        console.log(respond)
        this.profile=respond["user"]
      },
      (error)=>{
        console.log(error)
      });

      // this.profile=
      // [
      //   new profile("sabrina1" ,"sabrina@gmail.com")
      // ]
  }


}
