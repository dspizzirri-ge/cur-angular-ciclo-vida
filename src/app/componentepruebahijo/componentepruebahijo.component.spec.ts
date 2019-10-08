import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentepruebahijoComponent } from './componentepruebahijo.component';

describe('ComponentepruebahijoComponent', () => {
  let component: ComponentepruebahijoComponent;
  let fixture: ComponentFixture<ComponentepruebahijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentepruebahijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentepruebahijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
