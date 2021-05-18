import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrendCatalogComponent } from './brend-catalog.component';

describe('BrendCatalogComponent', () => {
  let component: BrendCatalogComponent;
  let fixture: ComponentFixture<BrendCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrendCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrendCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
