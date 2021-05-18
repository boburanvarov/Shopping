import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCatalogComponent } from './tabs-catalog.component';

describe('TabsCatalogComponent', () => {
  let component: TabsCatalogComponent;
  let fixture: ComponentFixture<TabsCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
