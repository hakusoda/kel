import type { ComponentCreator } from './types';
export function Component<T>(): ComponentCreator<T> {
	const creator = (data: T) => ({
		data,
		type: creator
	});
	components.push(creator);

	return creator;
}

export const components: ComponentCreator<any>[] = [];