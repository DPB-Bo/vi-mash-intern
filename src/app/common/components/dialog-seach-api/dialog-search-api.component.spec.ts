import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSeachApiComponent } from './dialog-search-api.component';

describe('DialogSeachApiComponent', () => {
  let component: DialogSeachApiComponent;
  let fixture: ComponentFixture<DialogSeachApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSeachApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSeachApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
