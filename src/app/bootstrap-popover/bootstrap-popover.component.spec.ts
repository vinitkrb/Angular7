import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPopoverComponent } from './bootstrap-popover.component';

describe('BootstrapPopoverComponent', () => {
  let component: BootstrapPopoverComponent;
  let fixture: ComponentFixture<BootstrapPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
