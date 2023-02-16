import { Component, OnInit } from '@angular/core';
import { Beneficiary } from 'src/app/Entity/beneficiary';
import { Member } from 'src/app/Entity/member';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-beneficiaryprofile',
  templateUrl: './beneficiaryprofile.component.html',
  styleUrls: ['./beneficiaryprofile.component.css']
})
export class BeneficiaryprofileComponent implements OnInit {

  beneficiary= new Beneficiary();
  constructor(private service:ServiceService) { }
  role:string;
  ngOnInit(): void {
    this.role = sessionStorage.getItem("type");
    const promise = this.service.findBeneficiaryId(sessionStorage.getItem("id"))
    promise.subscribe((response) => {
      this.beneficiary = response as Beneficiary;
    })
  }

}
