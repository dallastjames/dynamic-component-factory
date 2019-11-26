import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompBComponent } from './comp-b.component';

describe('CompBComponent', () => {
    let component: CompBComponent;
    let fixture: ComponentFixture<CompBComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompBComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CompBComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
