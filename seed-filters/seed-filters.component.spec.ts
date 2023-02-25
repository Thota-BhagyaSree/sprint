import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedFiltersComponent } from './seed-filters.component';

describe('SeedFiltersComponent', () => {
  let component: SeedFiltersComponent;
  let fixture: ComponentFixture<SeedFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
