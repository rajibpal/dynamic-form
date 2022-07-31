import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFieldComponent } from './preview-field.component';

describe('PreviewFieldComponent', () => {
  let component: PreviewFieldComponent;
  let fixture: ComponentFixture<PreviewFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
