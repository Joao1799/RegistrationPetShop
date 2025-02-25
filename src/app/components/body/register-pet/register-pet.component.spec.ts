import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPetComponent } from './register-pet.component';

describe('RegisterPetComponent', () => {
  let component: RegisterPetComponent;
  let fixture: ComponentFixture<RegisterPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
