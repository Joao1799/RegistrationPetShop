import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterServiceComponent } from './register-service.component';

describe('RegisterServiceComponent', () => {
  let component: RegisterServiceComponent;
  let fixture: ComponentFixture<RegisterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
