import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclodevidaComponent } from './ciclodevida.component';

describe('CiclodevidaComponent', () => {
  let component: CiclodevidaComponent;
  let fixture: ComponentFixture<CiclodevidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiclodevidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclodevidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
