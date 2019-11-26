import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@tse/env';
import { DataNode } from '@tse/shared/models';
import { ComponentType } from '@tse/shared/enums';

@Injectable({
    providedIn: 'root'
})
export class PageService {
    constructor(private http: HttpClient) {}

    public async getPageJson(query: string): Promise<Array<DataNode>> {
        // return this.http.get<Array<DataNode>>(`${environment.pageApi}${query}`).toPromise();
        return [
            {
                type: ComponentType.CompA,
                children: []
            },
            {
                type: ComponentType.CompB,
                children: [
                    {
                        type: ComponentType.CompA,
                        children: []
                    }
                ]
            },
            {
                type: ComponentType.CompC,
                children: []
            }
        ];
    }
}
