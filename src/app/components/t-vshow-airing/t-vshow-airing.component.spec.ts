import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVshowAiringComponent } from './t-vshow-airing.component';

describe('TVshowAiringComponent', () => {
  let component: TVshowAiringComponent;
  let fixture: ComponentFixture<TVshowAiringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVshowAiringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TVshowAiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
