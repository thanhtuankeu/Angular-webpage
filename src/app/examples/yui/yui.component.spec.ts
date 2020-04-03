import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuiComponent } from './yui.component';

describe('YuiComponent', () => {
  let component: YuiComponent;
  let fixture: ComponentFixture<YuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
