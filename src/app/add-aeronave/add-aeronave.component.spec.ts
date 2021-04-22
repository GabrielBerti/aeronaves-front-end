import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAeronaveComponent } from './add-aeronave.component';

describe('AddAeronaveComponent', () => {
  let component: AddAeronaveComponent;
  let fixture: ComponentFixture<AddAeronaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddAeronaveComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAeronaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
