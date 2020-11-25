import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component'
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestLineComponent } from './requestline/requestline.component';
import { RequestLineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestLineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestReviewListComponent } from './request-review/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './request-review/request-review-item/request-review-item.component';


const routes: Routes = [
{path: '', redirectTo: 'user/login', pathMatch: 'full'}, 
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: "user", component: UserListComponent},
{path: "user/edit/:id", component: UserEditComponent},
{path: "user/detail/:id", component: UserDetailComponent},
{path: "user/create", component: UserCreateComponent},
{path: "user/login", component: UserLoginComponent},
{path: "vendor", component: VendorListComponent},
{path: "vendor/create", component: VendorCreateComponent},
{path: "vendor/detail/:id", component: VendorDetailComponent},
{path: "vendor/edit/:id", component: VendorEditComponent},
{path: "product", component: ProductListComponent},
{path: "product/detail/:id", component: ProductDetailComponent},
{path: "product/edit/:id", component: ProductEditComponent},
{path: "product/create", component: ProductCreateComponent},
{path: "request", component: RequestListComponent},
{path: "request/detail/:id", component: RequestDetailComponent},
{path: "request/edit/:id", component: RequestEditComponent},
{path: "request/create", component: RequestCreateComponent},
{path: "request/line/:id", component: RequestLineComponent},
{path: "request/line/create/:id", component: RequestLineCreateComponent},
{path: "request/line/edit/:id", component: RequestLineEditComponent},
{path: "review", component: RequestReviewListComponent},
{path: "request/review/:id", component: RequestReviewItemComponent},

{path: '**', component: E404Component} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
