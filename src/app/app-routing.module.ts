import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaryComponent } from './Component/beneficiary/beneficiary.component';
import { BeneficiaryprofileComponent } from './Component/beneficiaryprofile/beneficiaryprofile.component';
import { ClaimComponent } from './Component/claim/claim.component';
import { ContactusComponent } from './Component/contactus/contactus.component';
import { HomeComponent } from './Component/home/home.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { RegisterComponent } from './Component/register/register.component';
import { UpdateComponent } from './Component/update/update.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"update",component:UpdateComponent
  },
  {
    path:"contact",component:ContactusComponent
  },
  {
    path:"claim",component:ClaimComponent
  },
  {
    path:"profile",component:ProfileComponent
  },
  {
    path:"beneficiary",component:BeneficiaryComponent
  },
  {
    path:"beneficiaryprofile",component:BeneficiaryprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
