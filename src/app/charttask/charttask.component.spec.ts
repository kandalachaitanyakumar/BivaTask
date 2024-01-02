import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharttaskComponent } from './charttask.component';

describe('CharttaskComponent', () => {
  let component: CharttaskComponent;
  let fixture: ComponentFixture<CharttaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharttaskComponent]
    });
    fixture = TestBed.createComponent(CharttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
