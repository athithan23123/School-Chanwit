import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomeComponent } from './infome.component';

describe('InfomeComponent', () => {
  let component: InfomeComponent;
  let fixture: ComponentFixture<InfomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
