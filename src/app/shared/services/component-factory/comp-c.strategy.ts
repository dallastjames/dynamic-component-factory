import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ComponentStrategy, ResolvedComponent } from '@tse/shared/models';
import { CompCComponent } from '@tse/shared/components';

interface CompCInputStructure {
    name: string;
    components: Array<any>;
}

export class CompCStrategy extends ComponentStrategy<CompCInputStructure> {
    async processsComponentData(
        resolver: ComponentFactoryResolver,
        data: CompCInputStructure
    ): Promise<ComponentFactory<ResolvedComponent>> {
        // do something with data, resolve the component
        return resolver.resolveComponentFactory(CompCComponent);
    }
}
