import {
    Injectable,
    ComponentFactory,
    ComponentFactoryResolver
} from '@angular/core';
import {
    ResolvedComponent,
    DataNode,
    ComponentStrategy
} from '@tse/shared/models';
import { ComponentType } from '@tse/shared/enums';
import { CompAStrategy } from './comp-a.strategy';
import { CompBStrategy } from './comp-b.strategy';
import { CompCStrategy } from './comp-c.strategy';

@Injectable({
    providedIn: 'root'
})
export class ComponentFactoryService {
    constructor(private resolver: ComponentFactoryResolver) {}

    async createComponents(
        data: Array<DataNode>
    ): Promise<Array<ComponentFactory<ResolvedComponent>>> {
        const resolvedComponents: Array<ComponentFactory<
            ResolvedComponent
        >> = [];

        for (const node of data) {
            const strategy = this.getStrategy(node.type);
            resolvedComponents.push(
                await strategy.processsComponentData(this.resolver, node)
            );
            if (node.children.length > 0) {
                const childComponents = await this.createComponents(
                    node.children
                );
                childComponents.forEach(c => {
                    resolvedComponents.push(c);
                });
            }
        }
        return resolvedComponents;
    }

    private getStrategy(type: ComponentType): ComponentStrategy {
        switch (type) {
            case ComponentType.CompA:
                return new CompAStrategy();
            case ComponentType.CompB:
                return new CompBStrategy();
            case ComponentType.CompC:
                return new CompCStrategy();
            default:
                throw new Error(`Unsupported Component Type: ${type}`);
        }
    }
}
