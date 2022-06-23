import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBasicTemplaterComponent } from './ngx-basic-templater.component';

describe('NgxBasicTemplaterComponent', () => {
  let component: NgxBasicTemplaterComponent;
  let fixture: ComponentFixture<NgxBasicTemplaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBasicTemplaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBasicTemplaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
