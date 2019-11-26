import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ComponentStrategy, ResolvedComponent } from '@tse/shared/models';
import { CompBComponent } from '@tse/shared/components';

interface CompBInputStructure {
    name: string;
    size: number;
}

export class CompBStrategy extends ComponentStrategy<CompBInputStructure> {
    async processsComponentData(
        resolver: ComponentFactoryResolver,
        data: CompBInputStructure
    ): Promise<ComponentFactory<ResolvedComponent>> {
        // do something with data, resolve the component
        return resolver.resolveComponentFactory(CompBComponent);
    }
}
