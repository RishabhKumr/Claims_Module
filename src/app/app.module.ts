import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { HeaderComponent } from './Component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { RegisterComponent } from './Component/register/register.component';
import { UpdateComponent } from './Component/update/update.component';
import { ContactusComponent } from './Component/contactus/contactus.component';
import { ClaimComponent } from './Component/claim/claim.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { UpdatebeneficiaryComponent } from './Component/updatebeneficiary/updatebeneficiary.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import {FormControl, Validators} from '@angular/forms';
import { BeneficiaryComponent } from './Component/beneficiary/beneficiary.component';
import { BeneficiaryprofileComponent } from './Component/beneficiaryprofile/beneficiaryprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatCardContent } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    RegisterComponent,
    UpdateComponent,
    ContactusComponent,
    ClaimComponent,
    ProfileComponent,
    UpdatebeneficiaryComponent,
    BeneficiaryComponent,
    BeneficiaryprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    
  ],
  providers:  [
    HttpClientModule,
    HttpClient,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
