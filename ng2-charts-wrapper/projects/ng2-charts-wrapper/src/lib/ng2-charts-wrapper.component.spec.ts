import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2ChartsWrapperComponent } from './ng2-charts-wrapper.component';

describe('Ng2ChartsWrapperComponent', () => {
  let component: Ng2ChartsWrapperComponent;
  let fixture: ComponentFixture<Ng2ChartsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2ChartsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ChartsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
