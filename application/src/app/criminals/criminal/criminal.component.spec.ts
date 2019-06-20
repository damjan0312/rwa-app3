import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalComponent } from './criminal.component';

describe('CriminalComponent', () => {
  let component: CriminalComponent;
  let fixture: ComponentFixture<CriminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
