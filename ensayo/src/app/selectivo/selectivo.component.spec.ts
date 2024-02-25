import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectivoComponent } from './selectivo.component';

describe('SelectivoComponent', () => {
  let component: SelectivoComponent;
  let fixture: ComponentFixture<SelectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
