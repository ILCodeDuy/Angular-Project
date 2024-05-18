import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlProductsComponent } from './ql-products.component';

describe('QlProductsComponent', () => {
  let component: QlProductsComponent;
  let fixture: ComponentFixture<QlProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QlProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
