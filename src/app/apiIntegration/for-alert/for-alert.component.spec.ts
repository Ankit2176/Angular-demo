import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAlertComponent } from './for-alert.component';

describe('ForAlertComponent', () => {
  let component: ForAlertComponent;
  let fixture: ComponentFixture<ForAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
