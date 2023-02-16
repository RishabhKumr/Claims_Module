import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficiary } from 'src/app/Entity/beneficiary';
import { Member } from 'src/app/Entity/member';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }
  member = new Member();
  beneficiary:Beneficiary[]=[];
  searchType:string;
  role:string;
  id:string;
  ngOnInit(): void {
    this.id = sessionStorage.getItem("id")
    this.role = sessionStorage.getItem("type");
    this.searchType = sessionStorage.getItem("id");
    const promise = this.service.findMemberById(this.searchType);
    promise.subscribe((response) => {
      this.member = response as Member;
      const promise2 = this.service.getBeneficiary(this.id);
      promise2.subscribe((response) => {
        this.beneficiary = response as Beneficiary[];
        console.log(this.beneficiary);
      })
    })
  }

  addBeneficiary(){
    this.router.navigate(['beneficiary']);
  }

  deleteMethod(beneficiary:Beneficiary){
    this.service.deleteBeneficiary(beneficiary.beneficiaryId).subscribe((data) => {
      alert("Beneficiary Deleted");
      window.location.reload();
    })
  }
}
