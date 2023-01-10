import { task } from '..'

export interface taskState<T> {
    data: null | T;
    state: 'error' | 'loading' | 'idle' | 'success';
    error: null | Error
}

