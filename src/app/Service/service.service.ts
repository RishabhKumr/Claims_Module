import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../Entity/member';
import { MemberUpdate } from '../Entity/memberupdate';
import { Claim } from '../Entity/Claim';
import { Beneficiary } from '../Entity/beneficiary';
import { Mail } from '../Entity/Mail';
const api = "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient:HttpClient) { }
  
  register(member:Member): Observable<any> {
    return this.httpClient.post(api + 'registermember',member);
  }

  updateMember(memberupdate:MemberUpdate,id:string):Observable<any>{
    return this.httpClient.put(api+"updatemember"+"/"+id,memberupdate);
  }

  raiseClaim(claim:Claim):Observable<any>{
    return this.httpClient.post(api + 'createclaim', claim);
  }

  findMemberById(id:string){
    return this.httpClient.get(api+'searchbyid'+'/'+id);
  }

  findBeneficiaryId(id:String){
    return this.httpClient.get(api+'searchbybeneficiaryId/'+id);
  }

  addBeneficiary(beneficiary:Beneficiary):Observable<any>{
    return this.httpClient.post(api+'addbeneficiary',beneficiary);
  }

  getBeneficiary(id:string){
    return this.httpClient.get(api+'getallbeneficiarybymemberid'+'/'+id);
  }

  deleteBeneficiary(id:string){
    return this.httpClient.delete(api+'deletebeneficiarybyid/'+id);
  }

  contactUs(mail:Mail):Observable<any>{
    return this.httpClient.post(api+'mailservice',mail);
  }
}

