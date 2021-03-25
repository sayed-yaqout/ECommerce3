import { Injectable } from '@angular/core';

import { HttpClient , HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

// import { Observable } from 'rxjs';
// import{profile} from '../admin-profile/profileData'

@Injectable({
    providedIn: 'root'
  })
  export class profileData{

    //const baseUrl= "http://localhost:3000/api/user/profile";
    private baseUrl = 'https://ecommerceapp-sportswear.herokuapp.com/user/profile';

     Profiledata = new Subject();
     getToken()
    {
        const token= localStorage.getItem("token");
        if (token==null)
            return '';
        else
            return token;
    }

      constructor(private http: HttpClient){}
      getData(){
         return this.http.get(this.baseUrl,{headers:{authorization:this.getToken()}})
      }

    //const baseUrl= "http://localhost:3000/api/dmin/profile";
     private adminBaseUrl = 'https://ecommerceapp-sportswear.herokuapp.com/admin/profile';

      getAdminData(){
        return this.http.get(this.adminBaseUrl,{headers:{authorization:this.getToken()}})
      }
  }

// import { Injectable } from '@angular/core';

// import { HttpClient , HttpClientModule } from '@angular/common/http';

// // import { Observable } from 'rxjs';
// // import{profile} from '../admin-profile/profileData';

// @Injectable({
//     providedIn: 'root'
//   })
//   export class profileData{
//       constructor(private http: HttpClient){}
//       getData(){
//           return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
//       }
//   }
