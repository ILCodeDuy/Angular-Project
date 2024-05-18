import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlCategoriesComponent } from './ql-categories.component';

describe('QlCategoriesComponent', () => {
  let component: QlCategoriesComponent;
  let fixture: ComponentFixture<QlCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QlCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
