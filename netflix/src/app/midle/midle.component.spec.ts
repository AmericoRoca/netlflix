import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidleComponent } from './midle.component';

describe('MidleComponent', () => {
  let component: MidleComponent;
  let fixture: ComponentFixture<MidleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
