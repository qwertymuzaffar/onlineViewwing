import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MicroloansComponent } from './microloans.component';

describe('MicroloansComponent', () => {
  let component: MicroloansComponent;
  let fixture: ComponentFixture<MicroloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroloansComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MicroloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
