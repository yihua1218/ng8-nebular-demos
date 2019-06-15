import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterClientComponent } from './emitter-client.component';

describe('EmitterClientComponent', () => {
  let component: EmitterClientComponent;
  let fixture: ComponentFixture<EmitterClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitterClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
