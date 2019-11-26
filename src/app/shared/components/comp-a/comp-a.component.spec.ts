import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompAComponent } from './comp-a.component';

describe('CompAComponent', () => {
    let component: CompAComponent;
    let fixture: ComponentFixture<CompAComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompAComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CompAComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
