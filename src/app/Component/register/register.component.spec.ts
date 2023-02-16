import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';
import { ServiceService } from 'src/app/Service/service.service';
import { FormsModule,NgForm } from '@angular/forms';
import { throwError } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let form: NgForm;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule , FormsModule],
      providers: [ ServiceService ]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const service = TestBed.get(ServiceService);
    form = jasmine.createSpyObj('NgForm', ['resetForm']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render main header', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Member Registration');
  });

  it('should render Sub header', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Personal Details');
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

