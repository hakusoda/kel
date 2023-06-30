export type ComponentCreator<T = any> = (data: T) => CreatedComponent<T>
export interface CreatedComponent<T = unknown> {
	data: T,
	type: ComponentCreator<T>
}
export function Component<T>(): ComponentCreator<T> {
	const creator = (data: T) => {
		return {
			data,
			type: creator
		};
	};
	components.push(creator);

	return creator;
}

export const components: ComponentCreator<any>[] = [];