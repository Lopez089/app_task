import { task } from '..'

export interface listTask {
    tasks: null | task[];
    state: 'error' | 'loading' | 'idle';
    error: null | Error
}