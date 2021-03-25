

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import{ FormControl, FormGroup, Validators }from '@angular/forms';
import { from } from 'rxjs';
import {AuthService} from '../services/auth.service';
import{TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private AuthService:AuthService,private tokenStorage:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {

    this.AuthService.login(this.form).subscribe(
      data => {
        let myToken=data["token"];
      localStorage.setItem("token",myToken);
      let username=data["userName"];
      localStorage.setItem("username",username);
      this.router.navigateByUrl("/userhome")
      //islam yzabat elroute da
     // this.router.navigate(['/profile']);
        // this.tokenStorage.saveToken(data.accessToken);
        // this.tokenStorage.saveUser(data);

        // this.isLoginFailed = false;
        // this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    //this.navRouter.navigateByUrl('/userhome');


  }

  reloadPage() {
    window.location.reload();
  }


  //photo
  fd:FormData;
  done(t) {
    t.click();
  }
  // tslint:disable-next-line:typedef
  change(e, t2) {
    // tslint:disable-next-line:prefer-const
    let file = e.target.files[0];
    // tslint:disable-next-line:prefer-const
    let reader = new FileReader();
    // this.fd = new FormData();
    // this.fd.append('file', file, file.name);
    reader.readAsDataURL(file);
    reader.onload = readerEvent => {
      // tslint:disable-next-line:prefer-const
      let content = readerEvent.target.result;
      t2.src = content;
    };
  }
  //end of photo
}
