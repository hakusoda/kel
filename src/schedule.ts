export class Schedule<T extends Callback = () => void> {
	private callbacks: T[] = [];
	public fire(...args: Parameters<T>) {
		for (const callback of this.callbacks)
			callback(...args as unknown[]);
	}

	public registerCallback(callback: T) {
		this.callbacks.push(callback);
	}
}