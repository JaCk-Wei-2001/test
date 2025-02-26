import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewchartComponent } from './newchart.component';

describe('NewchartComponent', () => {
  let component: NewchartComponent;
  let fixture: ComponentFixture<NewchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewchartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
