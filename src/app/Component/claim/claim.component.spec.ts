import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';
import { ServiceService } from 'src/app/Service/service.service';
import { ClaimComponent } from './claim.component';
import { FormsModule,NgForm } from '@angular/forms';
describe('ClaimComponent', () => {
  let component: ClaimComponent;
  let fixture: ComponentFixture<ClaimComponent>;
  let form: NgForm;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimComponent ]
    })
    .compileComponents();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,FormsModule ],
      providers: [ ServiceService ]
    });
    fixture = TestBed.createComponent(ClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const service = TestBed.get(ServiceService);
    form = jasmine.createSpyObj('NgForm', ['resetForm']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render main header', () => {
    const fixture = TestBed.createComponent(ClaimComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Claim');
  });
  it('should render Sub header', () => {
    const fixture = TestBed.createComponent(ClaimComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Enter Details to raise claim request');
  });
  it('should set isValidFormSubmitted to true', () => {
    component.onSubmit(form);
    expect(component.isValidFormSubmitted).toBe(true);
  });

  it('should return if form is invalid', () => {
    form.invalid == false;
    component.onSubmit(form);
    expect(component.isValidFormSubmitted).toBe(true);
    });

    it('should set isValidFormSubmitted to true if form is valid', () => {
      form.invalid === false;
      component.onSubmit(form);
      expect(component.isValidFormSubmitted).toBe(true);
      });

    it('should set errorMessage on error', () => {
      form.invalid == false;
      const error = { error: { message: 'error' } };
      spyOn(component, 'onSubmit').and.returnValue();
      component.onSubmit(form); 
      expect(component.errorMessage).toBe('error');
      });
});
