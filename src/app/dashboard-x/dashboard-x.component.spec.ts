import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardXComponent } from './dashboard-x.component';

describe('DashboardXComponent', () => {
  let component: DashboardXComponent;
  let fixture: ComponentFixture<DashboardXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardXComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
