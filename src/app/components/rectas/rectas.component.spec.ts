import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RectasComponent } from './rectas.component';

describe('RectasComponent', () => {
  let component: RectasComponent;
  let fixture: ComponentFixture<RectasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RectasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
