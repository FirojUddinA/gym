import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FelictionComponent } from './feliction.component';

describe('FelictionComponent', () => {
  let component: FelictionComponent;
  let fixture: ComponentFixture<FelictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelictionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FelictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
