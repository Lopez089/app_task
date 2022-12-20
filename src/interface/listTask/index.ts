import { task } from '../index'

export interface listTask {
    tasks: null | task[]
    state: 'error' | 'loading' | 'idle'
}