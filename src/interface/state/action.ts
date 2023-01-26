import { task } from '..'
import { IStateFetch } from '../../hook/useFetch/index'
import { INewTask } from '../components/listTasks/index'

export enum actionType {
  initialState,
  addTask,
}

export interface initialState {
  type: actionType.initialState
  payload: IStateFetch<task[]>
}

export interface addTask {
  type: actionType.addTask
  payload: INewTask
}

export type taskAction = initialState | addTask
