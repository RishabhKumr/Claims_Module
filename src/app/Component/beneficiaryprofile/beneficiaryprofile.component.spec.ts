import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';
import { ServiceService } from 'src/app/Service/service.service';
import { BeneficiaryprofileComponent } from './beneficiaryprofile.component';

describe('BeneficiaryprofileComponent', () => {
  let component: BeneficiaryprofileComponent;
  let fixture: ComponentFixture<BeneficiaryprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryprofileComponent ]
    })
    .compileComponents();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ServiceService ]
    });


    fixture = TestBed.createComponent(BeneficiaryprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
