import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { NgForm } from '@angular/forms';
import { MemberUpdate } from 'src/app/Entity/memberupdate';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 

  memberupdate = new MemberUpdate();
  constructor(private service: ServiceService) { }
  errorMessage='error';
  memberId:string;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  panCardPattern="[A-Z]{5}[0-9]{4}[A-Z]{1}";
  emailAddressPattern = "^(.+)@(\\S+)$";
  isValidFormSubmitted = false; 
  ngOnInit(): void {
    
  }

  onSubmit(f:NgForm){
    this.isValidFormSubmitted = false;  
    console.log(this.memberupdate);
    console.log(this.memberupdate.memberId)
    if (f.invalid) {  
      return;  
   }  
   this.isValidFormSubmitted = true;
    this.service.updateMember(this.memberupdate,this.memberupdate.memberId).subscribe(
      data => {
        console.log(data);
        f.resetForm();
        alert(" Updated Successfully");
      },
      err => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage);
      }
    )
  }

}
