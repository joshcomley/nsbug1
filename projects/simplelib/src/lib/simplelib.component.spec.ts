import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplelibComponent } from './simplelib.component';

describe('SimplelibComponent', () => {
  let component: SimplelibComponent;
  let fixture: ComponentFixture<SimplelibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplelibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplelibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
