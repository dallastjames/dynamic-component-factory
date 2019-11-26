import {
    Component,
    OnInit,
    ViewChild,
    ComponentFactory,
    ViewContainerRef,
    ComponentRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResolvedComponent } from '@tse/shared/models';
import { PageService, ComponentFactoryService } from '@tse/shared/services';

@Component({
    selector: 'app-data-view',
    templateUrl: './data-view.page.html',
    styleUrls: ['./data-view.page.scss']
})
export class DataViewPage implements OnInit {
    private _unsub: Subject<void> = new Subject<void>();
    private _componentRefs: Array<ComponentRef<ResolvedComponent>> = [];

    @ViewChild('container', { read: ViewContainerRef, static: true })
    container: ViewContainerRef;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _pageService: PageService,
        private _componentFactoryService: ComponentFactoryService
    ) {}

    ngOnInit(): void {
        this._activatedRoute.queryParamMap
            .pipe(takeUntil(this._unsub))
            .subscribe(async qParams => {
                const query = qParams.get('query');
                const title = qParams.get('title');
                await this._clearPage();
                const nodes = await this._pageService.getPageJson(query);
                const factories = await this._componentFactoryService.createComponents(
                    nodes
                );
                await this._buildPage(factories);
            });
    }

    ngOnDestroy(): void {
        this._unsub.next();
        this._unsub.complete();
        this._clearPage();
    }

    private async _clearPage(): Promise<void> {
        if (this._componentRefs.length > 0) {
            this._componentRefs.forEach(async component => {
                await component.instance.destroy();
                component.destroy();
            });
            this._componentRefs = [];
        }
    }

    private async _buildPage(
        factories: Array<ComponentFactory<ResolvedComponent>>
    ): Promise<void> {
        factories.forEach(factory => {
            const componentRef = this.container.createComponent(factory);
            // Set whatever data here
            // componentRef.instance.setData();
            this._componentRefs.push(componentRef);
        });
    }
}
