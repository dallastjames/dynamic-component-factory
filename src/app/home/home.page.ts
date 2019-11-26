import { Component } from '@angular/core';
import { AvailablePage } from '@tse/shared/models';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    public availablePages: Array<AvailablePage> = [];

    constructor() {
        this.getAvailablePages();
    }

    getAvailablePages(): void {
        // This would fetch from an API
        this.availablePages = [
            {
                title: 'Series xi009',
                id: 'xi009',
                query: '?page=import/xi009'
            },
            {
                title: 'Series xi018',
                id: 'xi018',
                query: '?page=import/xi018'
            }
        ];
    }
}
