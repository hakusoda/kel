import { Entity } from './entity';
import type { ComponentCreator, CreatedComponent } from './component';

export const entities: Entity[] = [];
export function add(...components: CreatedComponent<any>[]) {
	const entity = new Entity(components);
	entities.push(entity);
	print('created new entity with', components.size(), 'component(s)');
}

export function query<T extends readonly ComponentCreator[]>(components: T): { [P in keyof T]: T[P] extends ComponentCreator<infer J> ? J : unknown }[] {
	const results: any[] = [];
	for (const entity of entities) {
		let bad = false;
		const e = [];
		for (const c of components) {
			const f = entity.components.find(g => g.type === c);
			if (f)
				e.push(f.data);
			else {
				bad = true;
				break;
			}
		}

		if (!bad)
			results.push(e);
	}

	return results;
}