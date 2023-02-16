import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { NgForm } from '@angular/forms';
import { Mail } from 'src/app/Entity/Mail';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private service: ServiceService) { }
  errorMessage='error';
  mail=new Mail();
  isValidFormSubmitted = false;
  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    this.isValidFormSubmitted = false;  
    if (f.invalid) {  
       return;  
    }  
    this.isValidFormSubmitted = true;
    
    this.service.contactUs(this.mail).subscribe(
      data => {
        console.log(data);
        f.resetForm();
        alert("Message Sent");
      },
      err => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage);
      }
    )

  }
}
