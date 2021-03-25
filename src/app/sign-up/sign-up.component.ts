import { Component, OnInit } from '@angular/core';
import{ FormControl, FormGroup, Validators }from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private AuthService:AuthService) { }

  ngOnInit(): void {
  }
  // myForm = new FormGroup({
  //   mail:new FormControl('',[Validators.required,Validators.pattern('^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$')]),
  //   userName:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9]{3,}$')]),
  //   password:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9]{3,}$')]),
  //   confirmPassword:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9]{3,}$')])

  // })


  onSubmit() {

    const user={"username":this.form.username,"email":this.form.email,"password":this.form.password,"gender":this.form.gender,"image":"imageProfile"};
    console.log(user);

    this.AuthService.register(user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    // this.AuthService.register(this.form).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
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
