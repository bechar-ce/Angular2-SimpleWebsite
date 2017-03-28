import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2SetupComponent } from './angular2-setup.component';

describe('Angular2SetupComponent', () => {
  let component: Angular2SetupComponent;
  let fixture: ComponentFixture<Angular2SetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2SetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2SetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
