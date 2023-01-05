import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCardComponent } from './checkbox-card.component';

describe('CheckboxCardComponent', () => {
  let component: CheckboxCardComponent;
  let fixture: ComponentFixture<CheckboxCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
