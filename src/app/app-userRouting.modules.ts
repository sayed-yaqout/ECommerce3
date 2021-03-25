import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserHomeComponent} from "./user-home/user-home.component";
import { AddToCartComponent} from "./add-to-cart/add-to-cart.component"

const routes: Routes = [
  {
      path: 'UserPage', component: UserHomeComponent,
      children: [
        {
          path: 'OrdersComponent', component: OrderHistoryComponent
        },
        {
          path: 'Profile', component: UserProfileComponent
        },
        ,
        {
          path : 'Cart' ,component: AddToCartComponent
        },
        ]
        },
        {
          path:'user', redirectTo: '/UserPage/profile', pathMatch: 'full'
        }
        ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppUserRoutingModule { }
