import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2IntroComponent } from './angular2-intro.component';

describe('Angular2IntroComponent', () => {
  let component: Angular2IntroComponent;
  let fixture: ComponentFixture<Angular2IntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2IntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
