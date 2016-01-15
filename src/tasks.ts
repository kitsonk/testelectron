import { exec, spawn } from 'child_process';
import Task from 'dojo-core/async/Task';
import { Thenable } from 'dojo-core/Promise';

export interface TaskOptions<T> {
	exec?: string;
}

/**
 * A class that is designed to be used to spawn/exec an external process
 */
export class ExecutableTask<T> extends Task<T> {
	/**
	 * The resolver for this task
	 */
	private _resolve: (value?: T | Thenable<T>) => void;

	/**
	 * The rejector for this class
	 */
	private _reject: (reason?: any) => void;

	constructor(options: TaskOptions<T>) {
		super((resolve, reject) => {
			this._resolve = resolve;
			this._reject = reject;
		}, () => {
			console.log('I was cancelled');
		});
	}

	/**
	 * Execute the task.
	 * @param args Any arguments to pass the process
	 */
	exec(...args: string[]): this {
		console.log('I was executed', ...args);
		this._resolve();
		return this;
	}
}

export function createTask<T>(options: TaskOptions<T>): ExecutableTask<T> {
	return new ExecutableTask(options);
};
