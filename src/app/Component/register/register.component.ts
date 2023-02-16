import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/Entity/member';
import { ServiceService } from 'src/app/Service/service.service';
import { NgForm } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatError } from '@angular/material/typings';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  member = new Member();
  memberObj = new Member();
  constructor(private service: ServiceService,private http: HttpClient) { }
  errorMessage='error';
  fullnamePattern="^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$";
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  panCardPattern="[A-Z]{5}[0-9]{4}[A-Z]{1}";
  emailAddressPattern = "^(.+)@(\\S+)$";
  isValidFormSubmitted = false; 
  
  ngOnInit(): void {

  }

  onSubmit(f:NgForm){
   this.isValidFormSubmitted = false;  
   if (f.invalid) {  
      return;  
   }  
   this.isValidFormSubmitted = true;
    console.log(this.member);
    this.service.register(this.member).subscribe(
      data => {
        console.log(data);
        f.resetForm();
        this.memberObj = data;
        alert("Registered Successfully "+this.memberObj.memberId);
      },
      err => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage);
      }
    )
  }
}
