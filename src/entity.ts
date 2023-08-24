import type { CreatedComponent } from './types';
export class Entity {
	public components: CreatedComponent[];
	public constructor(components: CreatedComponent[]) {
		this.components = components;
	}
}