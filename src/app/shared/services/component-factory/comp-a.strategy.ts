import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ComponentStrategy, ResolvedComponent } from '@tse/shared/models';
import { CompAComponent } from '@tse/shared/components';

interface CompAInputStructure {
    name: string;
}

export class CompAStrategy extends ComponentStrategy<CompAInputStructure> {
    async processsComponentData(
        resolver: ComponentFactoryResolver,
        data: CompAInputStructure
    ): Promise<ComponentFactory<ResolvedComponent>> {
        // do something with data, resolve the component
        return resolver.resolveComponentFactory(CompAComponent);
    }
}
