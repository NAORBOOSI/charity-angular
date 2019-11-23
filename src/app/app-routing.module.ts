import { NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { ListDeliveryComponent } from './component/list-delivery/list-delivery.component';
import { ListGettingComponent } from './component/list-getting/list-getting.component';
import { GettingComponent } from './component/getting/getting.component';
import { DeliveryComponent } from './component/delivery/delivery.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProfileComponent } from './component/profile/profile.component';
import { CreateDeliveryComponent } from './component/create-delivery/create-delivery.component';
import { CreateGettingComponent } from './component/create-getting/create-getting.component';
import { SearchUserComponent } from './component/search-user/search-user.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { ListCompanyComponent } from './component/list-company/list-company.component';
import { CompanyComponent } from './component/company/company.component';
import { CreateCompanyComponent } from './component/create-company/create-company.component';



const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'list-delivery', component: ListDeliveryComponent },
  { path: 'list-getting', component: ListGettingComponent },
  { path: 'list-company', component: ListCompanyComponent},
  
  { path: 'company', component: CompanyComponent },
  { path: 'getting', component: GettingComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home-page', component: HomePageComponent },

  { path: 'addUser', component: CreateUserComponent },

  { path: 'addDelivery', component: CreateDeliveryComponent },
  { path: 'addGetting', component: CreateGettingComponent },
  { path: 'addCompany', component: CreateCompanyComponent },

  { path: 'findByFirstName', component: SearchUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
