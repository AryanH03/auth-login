import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPawdComponent } from './forget-pawd.component';

describe('ForgetPawdComponent', () => {
  let component: ForgetPawdComponent;
  let fixture: ComponentFixture<ForgetPawdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetPawdComponent]
    });
    fixture = TestBed.createComponent(ForgetPawdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
