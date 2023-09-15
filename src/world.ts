import { Entity } from './entity';
import type { CreatedComponent } from './types';

import { entities } from './query';
export function add(...components: CreatedComponent<any>[]) {
	const entity = new Entity(components);
	entities.push(entity);
	
	print('created new entity with', components.size(), 'component(s)');
	return entity;
}