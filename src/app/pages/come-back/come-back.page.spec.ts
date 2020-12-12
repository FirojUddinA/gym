import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComeBackPage } from './come-back.page';

describe('ComeBackPage', () => {
  let component: ComeBackPage;
  let fixture: ComponentFixture<ComeBackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComeBackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComeBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
