import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Beneficiary } from 'src/app/Entity/beneficiary';
import { NgForm } from '@angular/forms';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {

  beneficiary = new Beneficiary();
  constructor(private service:ServiceService  ) { }
  errorMessage='error';
  id:string;
  isValidFormSubmitted = false; 
  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    this.isValidFormSubmitted = false;  
   if (f.invalid) {  
      return;  
   }  
   this.isValidFormSubmitted = true;
    this.id = sessionStorage.getItem("id");
    this.beneficiary.memberId = this.id;
    console.log(this.beneficiary);
    this.service.addBeneficiary(this.beneficiary).subscribe(
      data => {
        console.log(data);
        f.resetForm();
        alert("Beneficiary Added!");
      },
      err => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage);
      }
    )
  }

}
