import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//const AUTH_API = 'http://localhost:3000/api/user/';
const AUTH_API ='https://ecommerceapp-sportswear.herokuapp.com/api/user/';

//const ADMIN_AUTH_API = 'http://localhost:3000/api/admin/';
const ADMIN_AUTH_API ='https://ecommerceapp-sportswear.herokuapp.com/api/admin/';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {


    constructor(private http: HttpClient) { }

    login(credentials): Observable<any> {
      return this.http.post(AUTH_API + 'login', {
        username: credentials.username,
        password: credentials.password
      }, httpOptions);
    }

    register(user) {
      //console.log(user.image)
      //console.log(user);
      return this.http.post(AUTH_API+"register",user);
    }

    loginAsAdmin(credentials):Observable<any>{
      return this.http.post(ADMIN_AUTH_API + 'login', {
        username: credentials.username,
        password: credentials.password
      }, httpOptions);
    }
  }






// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// const AUTH_API = 'http://localhost:8080/api/auth/';

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };


//   @Injectable({
//     providedIn: 'root'
//   })
//   export class AuthService {

//     constructor(private http: HttpClient) { }

//     login(credentials): Observable<any> {
//       return this.http.post(AUTH_API + 'signin', {
//         username: credentials.username,
//         password: credentials.password
//       }, httpOptions);
//     }

//     register(user): Observable<any> {
//       return this.http.post(AUTH_API + 'signup', {
//         username: user.username,
//         email: user.email,
//         password: user.password
//       }, httpOptions);
//     }
//   }
