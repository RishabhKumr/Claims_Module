import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onselected(value:string){
    sessionStorage.setItem("type",value);
  }
  id:any;
  typecheck:string;
  saveQueryToSessionStorage(f:NgForm){
    sessionStorage.setItem("id",String(this.id));
    this.typecheck = sessionStorage.getItem("type");
    if(this.typecheck === "Member"){
    this.router.navigate(['profile']);
    }

    if(this.typecheck === "Beneficiary"){
      this.router.navigate(['beneficiaryprofile']);
    }

    if(this.typecheck === null){
      alert("Please select type");
    }
    f.resetForm();
  }

}
