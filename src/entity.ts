import { HttpService } from '@rbxts/services';

import { queryThroughEntities } from './query';
import type { CreatedComponent, ComponentCreator } from './types';
export class Entity {
	public readonly id: string;
	public parent: Entity | undefined;
	public children: Entity[] = [];
	public components: CreatedComponent<any>[];
	public constructor(components: CreatedComponent<any>[], parent?: Entity) {
		this.id = HttpService.GenerateGUID(false);
		this.parent = parent;
		this.components = components;
	}

	public addChildren(entities: Entity[]) {
		for (const entity of entities) {
			this.children.push(entity);
			entity.parent = this;
		}
	}

	public queryChildren<T extends readonly (ComponentCreator | 'ENTITY')[]>(components: T): { [P in keyof T]: T[P] extends ComponentCreator<infer J> ? J : Entity }[] {
		return queryThroughEntities(this.children, components);
	}
	
	public getComponent<T extends ComponentCreator>(componentType: T): CreatedComponent<Parameters<T>[0]> | undefined {
		return this.components.find(c => c.type === componentType);
	}
}