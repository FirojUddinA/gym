import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchModal2Component } from './search-modal2.component';

describe('SearchModal2Component', () => {
  let component: SearchModal2Component;
  let fixture: ComponentFixture<SearchModal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchModal2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
