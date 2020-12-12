import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiejectionComponent } from './miejection.component';

describe('MiejectionComponent', () => {
  let component: MiejectionComponent;
  let fixture: ComponentFixture<MiejectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiejectionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiejectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
