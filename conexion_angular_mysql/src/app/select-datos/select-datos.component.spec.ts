import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDatosComponent } from './select-datos.component';

describe('SelectDatosComponent', () => {
  let component: SelectDatosComponent;
  let fixture: ComponentFixture<SelectDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
