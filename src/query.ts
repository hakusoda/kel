import type { Entity } from './entity';
import type { ComponentCreator } from './types';

export const entities: Entity[] = (shared as any)._kel_entities_ ??= [];
export function query<T extends readonly (ComponentCreator | 'ENTITY')[]>(components: T): { [P in keyof T]: T[P] extends ComponentCreator<infer J> ? J : Entity }[] {
	return queryThroughEntities(entities, components);
}

export function queryThroughEntities<T extends readonly (ComponentCreator | 'ENTITY')[]>(entities: Entity[], components: T): { [P in keyof T]: T[P] extends ComponentCreator<infer J> ? J : Entity }[] {
	const results: any[] = [];
	for (const entity of entities) {
		let bad = false;
		const e = [];
		for (const c of components) {
			if (c === 'ENTITY')
				e.push(entity);
			else {
				const f = entity.components.find(g => g.type === c);
				if (f)
					e.push(f.data);
				else {
					bad = true;
					break;
				}
			}
		}

		if (!bad)
			results.push(e);
	}

	return results;
}