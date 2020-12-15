import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiEjercicioPage } from './mi-ejercicio.page';

describe('MiEjercicioPage', () => {
  let component: MiEjercicioPage;
  let fixture: ComponentFixture<MiEjercicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiEjercicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiEjercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
