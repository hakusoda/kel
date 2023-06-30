import type { CreatedComponent } from './component';
export class Entity {
	public components: CreatedComponent[];
	public constructor(components: CreatedComponent[]) {
		this.components = components;
	}
}