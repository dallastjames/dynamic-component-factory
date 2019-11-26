import { Component, OnInit } from '@angular/core';
import { ResolvedComponent } from '@tse/shared/models';

@Component({
    selector: 'app-comp-a',
    templateUrl: './comp-a.component.html',
    styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit, ResolvedComponent {
    constructor() {}

    ngOnInit(): void {}

    async setData(): Promise<void> {}

    async destroy(): Promise<void> {}
}
