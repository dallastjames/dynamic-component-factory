import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataViewPage } from './data-view.page';

describe('DataViewPage', () => {
    let component: DataViewPage;
    let fixture: ComponentFixture<DataViewPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DataViewPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(DataViewPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
