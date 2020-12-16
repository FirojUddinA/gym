import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicPlanComponent } from './basic-plan.component';

describe('BasicPlanComponent', () => {
  let component: BasicPlanComponent;
  let fixture: ComponentFixture<BasicPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPlanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
