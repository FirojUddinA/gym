import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RectasNullComponent } from './rectas-null.component';

describe('RectasNullComponent', () => {
  let component: RectasNullComponent;
  let fixture: ComponentFixture<RectasNullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectasNullComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RectasNullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
