import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiceService } from './service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Member } from '../Entity/member';
import { Beneficiary } from '../Entity/beneficiary';
import { Claim } from '../Entity/Claim';
import { MemberUpdate } from '../Entity/memberupdate';
describe('ServiceService', () => {
  let httpTestingController: HttpTestingController;
  let service: ServiceService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceService]
    });
    imports: [HttpClientTestingModule]
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ServiceService);

    httpMock = TestBed.get(HttpTestingController);
  });
  providers: [
    { provide: ServiceService, useValue: ServiceService, HttpClientTestingModule }
  ]

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  const api = "http://localhost:8080/"
  //register
  it('should register a member', () => {
    const member: Member = {
      memberName: 'test',
      memberId: 'test',
      memberAddress: 'test',
      memberState: 'test',
      memberCountry: 'test',
      memberEmail: 'test@gmail.com',
      memberPAN: 'EZRPK7852L',
      memberContactNo: 'JYHBU',
      memberDOB: '1997-10-03'
    };
    service.register(member).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const request = httpMock.expectOne(`${api}registermember`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(member);
    request.flush({});
  });

  //add beneficiary
  it('should add a Beneficiary', () => {

    const beneficiary: Beneficiary = {
      beneficiaryId: 'test',
      beneficiaryName: 'test',
      beneficiaryDOB: '1997-10-03',
      beneficiaryRelation: 'test',
      beneficiaryPAN: 'test',
      beneficiaryAddress: 'test',
      beneficiaryState: 'test',
      beneficiaryCountry: 'test',
      memberId: 'test'
    };

    service.addBeneficiary(beneficiary).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const request = httpMock.expectOne(`${api}addbeneficiary`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(beneficiary);
    request.flush({});
  });

  //add Claim
  it('should add a Claim', () => {

    const claim: Claim = {
      claimName: '',
      claimType: '',
      claimAmount: '',
      claimFor: '',
      claimerId: '',
      claimAdmissionDate: '',
      claimDischargeDate: '',
      claimProvider: ''
    };
    service.raiseClaim(claim).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const request = httpMock.expectOne(`${api}createclaim`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(claim);
    request.flush({});
  });

  it('should update a member', () => {
    const member: MemberUpdate = {
      memberId: 'test',
      memberAddress: 'test',
      memberState: 'test',
      memberCountry: 'test',
      memberEmail: 'test@gmail.com',
      memberPAN: 'EZRPK7852L',
      memberContactNo: 'JYHBU',
      memberDOB: '1997-10-03'
    };
    const id = 'test';
    service.updateMember(member, id).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const request = httpMock.expectOne(`${api}updatemember` + `/` + id);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(member);
    request.flush({});
  });
  it('should return a member by id', () => {
    const id = 'test';
    const member: Member = {
      memberName: 'test',
      memberId: 'test',
      memberAddress: 'test',
      memberState: 'test',
      memberCountry: 'test',
      memberEmail: 'test@gmail.com',
      memberPAN: 'EZRPK7852L',
      memberContactNo: 'JYHBU',
      memberDOB: '1997-10-03'
    };
    service.findMemberById(id).subscribe(result => {
      expect(result).toEqual(member);
    });
    const req = httpTestingController.expectOne(`${api}searchbyid` + `/` + id);
    expect(req.request.method).toEqual('GET');
    req.flush(member);
  });

  it('should return a beneficiary  by member id', () => {
    const id = 'test';
    const beneficiary: Beneficiary = {
      beneficiaryId: 'test',
      beneficiaryName: 'test',
      beneficiaryDOB: '1997-10-03',
      beneficiaryRelation: 'test',
      beneficiaryPAN: 'test',
      beneficiaryAddress: 'test',
      beneficiaryState: 'test',
      beneficiaryCountry: 'test',
      memberId: 'test'
    };
    service.getBeneficiary(id).subscribe(result => {
      expect(result).toEqual(beneficiary);
    });
    const req = httpTestingController.expectOne(`${api}getallbeneficiarybymemberid` + `/` + id);
    expect(req.request.method).toEqual('GET');
    req.flush(beneficiary);
  });
  it('should delete a beneficiary by id', () => {
    const id = 'test';
    service.deleteBeneficiary(id).subscribe(result => {
    expect(result).toBeNull();
    });
    const req = httpTestingController.expectOne(`${api}deletebeneficiarybyid` + `/` + id);
    expect(req.request.method).toEqual('DELETE');
    req.flush(null);
    });
});
