import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RectasitemComponent } from './rectasitem.component';

describe('RectasitemComponent', () => {
  let component: RectasitemComponent;
  let fixture: ComponentFixture<RectasitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectasitemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RectasitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
