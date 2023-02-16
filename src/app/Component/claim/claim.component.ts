import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { NgForm } from '@angular/forms';
import { Claim } from 'src/app/Entity/Claim';
@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(private service: ServiceService) { }
  claim = new Claim();
  errorMessage='error';
  isValidFormSubmitted = false; 
  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    console.log(this.claim);
    this.isValidFormSubmitted = false;  
   if (f.invalid) {  
      return;  
   }  
   this.isValidFormSubmitted = true;
    this.service.raiseClaim(this.claim).subscribe(
      data => {
        console.log(data);
        f.resetForm();
        alert("Claim Raised");
      },
      err => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage);
      }
    )
    console.log(this.claim);
  }
}
