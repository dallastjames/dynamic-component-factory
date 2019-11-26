import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ResolvedComponent } from './resolved-component.model';

export abstract class ComponentStrategy<T = any> {
    abstract processsComponentData(
        resolver: ComponentFactoryResolver,
        data: T
    ): Promise<ComponentFactory<ResolvedComponent>>;
}
