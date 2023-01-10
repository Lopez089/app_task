import { task } from '..';
import { IStateFetch } from '../../hook/useFetch/index'

export enum actionType {
    initialState,
    addTask,
}

export interface initialState {
    type: actionType.initialState;
    payload: IStateFetch<task[]>
}

export type taskAction = initialState