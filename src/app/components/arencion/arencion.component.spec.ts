import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArencionComponent } from './arencion.component';

describe('ArencionComponent', () => {
  let component: ArencionComponent;
  let fixture: ComponentFixture<ArencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArencionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
