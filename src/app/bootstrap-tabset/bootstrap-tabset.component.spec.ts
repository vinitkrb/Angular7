import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTabsetComponent } from './bootstrap-tabset.component';

describe('BootstrapTabsetComponent', () => {
  let component: BootstrapTabsetComponent;
  let fixture: ComponentFixture<BootstrapTabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
