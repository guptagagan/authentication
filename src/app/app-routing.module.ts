import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardcontainerComponent } from './dashboardcontainer/dashboardcontainer.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProductdeleteComponent } from './productdelete/productdelete.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductviewComponent } from './productview/productview.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UserdeleteComponent } from './userdelete/userdelete.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UsersComponent } from './users/users.component';
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardcontainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "products",
        component: ProductComponent
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "product-create",
        component: ProductcreateComponent
      },
      {
        path: "product-edit/:id",
        component: ProducteditComponent
      },
      {
        path: "product-view/:id",
        component: ProductviewComponent
      },
      {
        path: "product-delete",
        component: ProductdeleteComponent
      },
      {
        path: "user-create",
        component: UsercreateComponent
      },
      {
        path: "user-edit/:id",
        component: UsereditComponent
      },
      {
        path: "user-view/:id",
        component: UserviewComponent
      },
      {
        path: "user-delete",
        component: UserdeleteComponent
      }
    ]  
    },




  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
