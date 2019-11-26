import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompCComponent } from './comp-c.component';

describe('CompCComponent', () => {
    let component: CompCComponent;
    let fixture: ComponentFixture<CompCComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompCComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CompCComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
