import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-signout',
  templateUrl: './admin-signout.component.html',
  styleUrls: ['./admin-signout.component.css']
})
export class AdminSignoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  }

  logOut(){
    this.router.navigateByUrl("/generalHome");
  }

}
