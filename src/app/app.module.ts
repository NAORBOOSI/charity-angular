import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateDeliveryComponent } from './component/create-delivery/create-delivery.component';
import { CreateGettingComponent } from './component/create-getting/create-getting.component';
import { ListDeliveryComponent } from './component/list-delivery/list-delivery.component';
import { ListGettingComponent } from './component/list-getting/list-getting.component';
import { SearchUserComponent } from './component/search-user/search-user.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { ProfileComponent } from './component/profile/profile.component';
import { DeliveryComponent } from './component/delivery/delivery.component';
import { GettingComponent } from './component/getting/getting.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {
  MatToolbarModule,  MatSidenavModule, 
  MatListModule, MatSelectModule, MatRadioModule, MatGridListModule,   
} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { UserService } from  './user.service';

import { ListCompanyComponent } from './component/list-company/list-company.component';
import { CreateCompanyComponent } from './component/create-company/create-company.component';
import { CompanyComponent } from './component/company/company.component';


@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    GettingComponent,
    CreateDeliveryComponent,
    CreateGettingComponent,
    ListDeliveryComponent,
    ListGettingComponent,
    SearchUserComponent,
    HomePageComponent,
    CreateUserComponent,
    ProfileComponent,
    CompanyComponent,
    ListCompanyComponent,
    CreateCompanyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatCheckboxModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
