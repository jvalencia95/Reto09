import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxContenedorComponent } from './checkbox-contenedor.component';

describe('CheckboxContenedorComponent', () => {
  let component: CheckboxContenedorComponent;
  let fixture: ComponentFixture<CheckboxContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxContenedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
