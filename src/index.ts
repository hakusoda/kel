export * from './types';
export * from './query';
export * from './entity';
export * from './schedule';
export * from './component';

export * as world from './world';

import type { Schedule } from './schedule';
import type { System, SystemCallback } from './types';
export const systems: System[] = [];
export function addSystems(items: SystemCallback[], schedule?: Schedule<any>) {
	for (const callback of items) {
		systems.push({
			callback
		});
		schedule?.registerCallback(callback);
	}
}