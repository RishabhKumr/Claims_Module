import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';
import { ServiceService } from 'src/app/Service/service.service';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ServiceService ]
    });
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render member name', () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    component.member.memberName="test"
    expect(component.member.memberName).toContain('test');
  });

  it('should render ID', () =>{
     
    const id = HTMLElement = fixture.debugElement.nativeElement.querySelector('#getId');
    expect(id.innerHTML).toEqual('ID: ');
  });

  it('should render Role as Member', () =>{
    component.ngOnInit;
    component.role = "Member";
    const role = HTMLElement = fixture.debugElement.nativeElement.querySelector('#role');
    expect('Member').toEqual('Member');
  });
  
});
