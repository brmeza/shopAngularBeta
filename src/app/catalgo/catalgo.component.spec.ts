import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalgoComponent } from './catalgo.component';

describe('CatalgoComponent', () => {
  let component: CatalgoComponent;
  let fixture: ComponentFixture<CatalgoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalgoComponent]
    });
    fixture = TestBed.createComponent(CatalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
