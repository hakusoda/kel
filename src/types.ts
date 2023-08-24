export interface System {
	callback: SystemCallback
}
export type SystemCallback = (...args: any[]) => void

export type ComponentCreator<T = any> = (data: T) => CreatedComponent<T>
export interface CreatedComponent<T = unknown> {
	data: T,
	type: ComponentCreator<T>
}