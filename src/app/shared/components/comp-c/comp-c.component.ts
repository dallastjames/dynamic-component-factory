import { Component, OnInit } from '@angular/core';
import { ResolvedComponent } from '@tse/shared/models';

@Component({
    selector: 'app-comp-c',
    templateUrl: './comp-c.component.html',
    styleUrls: ['./comp-c.component.scss']
})
export class CompCComponent implements OnInit, ResolvedComponent {
    constructor() {}

    ngOnInit(): void {}

    async setData(): Promise<void> {}

    async destroy(): Promise<void> {}
}
