import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataViewPage } from './data-view.page';

const routes: Routes = [
    {
        path: ':pageId',
        component: DataViewPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataViewPageRoutingModule {}
