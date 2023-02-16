import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';
import { ServiceService } from 'src/app/Service/service.service';
import { ContactusComponent } from './contactus.component';
import { FormsModule,NgForm } from '@angular/forms';
describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;
  let form: NgForm;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusComponent ]
    })
    .compileComponents();
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,FormsModule ],
      providers: [ ServiceService ]
    });
    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const service = TestBed.get(ServiceService);
    form = jasmine.createSpyObj('NgForm', ['resetForm']);
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ContactusComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render main header', () => {
    const fixture = TestBed.createComponent(ContactusComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('CONTACT US');
  });

  it('should render Sub header', () => {
    const fixture = TestBed.createComponent(ContactusComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#footer')?.textContent).toContain('©2023 developed & Managed by Insurence Claim Team');
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
