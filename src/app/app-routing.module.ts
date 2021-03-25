import { AdminSignoutComponent } from './admin-signout/admin-signout.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';


const routes: Routes = [
{
    path: 'AdminDashboardComponent', component: AdminDashboardComponent,
    children: [
      {
        path: 'AdminOrdersComponent', component: AdminOrdersComponent
      },
      {
        path: 'adminProfile', component: AdminProfileComponent
      },
      {
        path : 'adminProducts' ,component: AdminProductsComponent
      }
      ,
      {
        path : 'adminAddProducts' ,component: AddProductComponent
      },
      {
        path : 'adminEditProducts' ,component: EditProductComponent
      },
      {
        path : 'adminSignOut' ,component: AdminSignoutComponent
      }
      ]
      },
      {
        path:'admin', redirectTo: '/AdminDashboardComponent/adminProfile', pathMatch: 'full'
      }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



