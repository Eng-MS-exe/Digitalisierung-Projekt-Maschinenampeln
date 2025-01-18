import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuesDashboardComponent } from './neues-dashboard.component';

describe('NeuesDashboardComponent', () => {
  let component: NeuesDashboardComponent;
  let fixture: ComponentFixture<NeuesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuesDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
