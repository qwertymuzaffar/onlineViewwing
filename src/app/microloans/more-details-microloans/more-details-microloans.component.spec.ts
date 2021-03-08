import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreDetailsMicroloansComponent } from './more-details-microloans.component';

describe('MoreDetailsMicroloansComponent', () => {
  let component: MoreDetailsMicroloansComponent;
  let fixture: ComponentFixture<MoreDetailsMicroloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDetailsMicroloansComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreDetailsMicroloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
