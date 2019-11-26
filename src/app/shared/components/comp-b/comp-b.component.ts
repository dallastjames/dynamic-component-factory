import { Component, OnInit } from '@angular/core';
import { ResolvedComponent } from '@tse/shared/models';

@Component({
    selector: 'app-comp-b',
    templateUrl: './comp-b.component.html',
    styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit, ResolvedComponent {
    constructor() {}

    ngOnInit(): void {}

    async setData(): Promise<void> {}

    async destroy(): Promise<void> {}
}
