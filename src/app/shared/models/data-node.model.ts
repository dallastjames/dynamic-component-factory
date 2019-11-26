import { ComponentType } from '../enums';

export interface DataNode {
    type: ComponentType;
    children: Array<DataNode>;
}
