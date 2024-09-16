import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleEventComponent } from './lifecyle-event.component';

describe('LifecyleEventComponent', () => {
  let component: LifecyleEventComponent;
  let fixture: ComponentFixture<LifecyleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifecyleEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
