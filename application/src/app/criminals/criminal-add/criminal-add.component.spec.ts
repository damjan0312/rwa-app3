import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalAddComponent } from './criminal-add.component';

describe('CriminalAddComponent', () => {
  let component: CriminalAddComponent;
  let fixture: ComponentFixture<CriminalAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
