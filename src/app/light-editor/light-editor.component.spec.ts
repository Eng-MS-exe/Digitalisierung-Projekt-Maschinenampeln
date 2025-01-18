import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightEditorComponent } from './light-editor.component';

describe('LightEditorComponent', () => {
  let component: LightEditorComponent;
  let fixture: ComponentFixture<LightEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
