import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalEditComponent } from './criminal-edit.component';

describe('CriminalEditComponent', () => {
  let component: CriminalEditComponent;
  let fixture: ComponentFixture<CriminalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
