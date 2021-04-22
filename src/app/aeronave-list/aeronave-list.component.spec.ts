import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeronaveListComponent } from './aeronave-list.component';

describe('AeronaveListComponent', () => {
  let component: AeronaveListComponent;
  let fixture: ComponentFixture<AeronaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AeronaveListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeronaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
